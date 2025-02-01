"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import Link from "next/link";

export default function CustomCard({ title, children, href }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        alt="Placeholder image"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
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
