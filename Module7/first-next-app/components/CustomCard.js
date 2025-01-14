"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CustomCard({ title, children, href }) {
  // Placeholder image to avoid hydration mismatch
  const placeholderImage =
    "https://via.placeholder.com/345x140?text=Loading...";
  const [imageSrc, setImageSrc] = useState(placeholderImage);

  useEffect(() => {
    // Set the actual image on the client side
    setImageSrc(
      "https://mui.com/static/images/cards/contemplative-reptile.jpg"
    );
  }, []);

  return (
    <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
      <CardMedia
        component="img"
        height="140"
        alt="Iguana"
        image={imageSrc} // Ensures image is consistent between SSR and client
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {children}
        </Typography>
      </CardContent>
      <CardActions>
        {href && (
          <Link href={href} legacyBehavior>
            <a>
              <Button size="small" color="primary">
                Read More
              </Button>
            </a>
          </Link>
        )}
      </CardActions>
    </Card>
  );
}
