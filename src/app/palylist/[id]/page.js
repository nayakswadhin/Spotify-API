"use client";
import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

function PlaySongsWithId({ params }) {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://spotify23.p.rapidapi.com/playlist_tracks/?id=${params.id}&offset=0&limit=100`,
        {
          headers: {
            "x-rapidapi-key":
              "6823ae7931msh859180d3fd55d9ep12c90fjsnaceabf338875",
            "x-rapidapi-host": "spotify23.p.rapidapi.com",
          },
        }
      )
      .then((res) => {
        setSongs(res.data.items);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [params.id]);
  return (
    <div className="flex flex-wrap justify-center">
      {songs.map((element) => {
        return (
          <>
            <Box loading="lazy" sx={{ minHeight: 350 }} className="p-2">
              <Card
                loading="lazy"
                variant="outlined"
                sx={(theme) => ({
                  width: 300,
                  gridColumn: "span 2",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  resize: "horizontal",
                  overflow: "hidden",
                  gap: "clamp(0px, (100% - 360px + 32px) * 999, 16px)",
                  transition: "transform 0.3s, border 0.3s",
                  "&:hover": {
                    borderColor: theme.vars.palette.primary.outlinedHoverBorder,
                    transform: "translateY(-2px)",
                  },
                  "& > *": {
                    minWidth: "clamp(0px, (360px - 100%) * 999,100%)",
                  },
                })}
              >
                <AspectRatio
                  variant="soft"
                  sx={{
                    flexGrow: 1,
                    display: "contents",
                    "--AspectRatio-paddingBottom":
                      "clamp(0px, (100% - 360px) * 999, min(calc(100% / (16 / 9)), 300px))",
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1492305175278-3b3afaa2f31f?auto=format&fit=crop&w=2000"
                    loading="lazy"
                    alt=""
                  />
                </AspectRatio>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    maxWidth: 200,
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <div>
                      <Typography level="title-lg">
                        <Link
                          href="#container-responsive"
                          overlay
                          underline="none"
                          sx={{
                            color: "text.primary",
                            "&.Mui-focusVisible:after": {
                              outlineOffset: "-4px",
                            },
                          }}
                        >
                          {element.track.name}
                        </Link>
                      </Typography>
                      <Typography level="body-sm">
                        {element.track.artists[0].name}
                      </Typography>
                    </div>
                    <IconButton
                      size="sm"
                      variant="plain"
                      color="neutral"
                      sx={{ ml: "auto", alignSelf: "flex-start" }}
                    >
                      <FavoriteBorderRoundedIcon color="danger" />
                    </IconButton>
                  </Box>
                  <AspectRatio
                    variant="soft"
                    sx={{
                      "--AspectRatio-paddingBottom":
                        "clamp(0px, (100% - 200px) * 999, 200px)",
                      pointerEvents: "none",
                    }}
                  >
                    <img alt="image" src={element.track.album.images[0]?.url} />
                  </AspectRatio>
                  <audio src={element.track.preview_url} controls></audio>
                </Box>
              </Card>
            </Box>
          </>
        );
      })}
    </div>
  );
}

export default PlaySongsWithId;
