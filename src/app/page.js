import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import Image from "next/image";

export default function Home() {
  const moods = [
    {
      id: "37i9dQZF1DWTwbZHrJRIgD",
      name: "Happy Vbes",
      url: "/Images/happyvibes.jpeg",
    },
    {
      id: "2QaHwH11qF9Mi7TpkKR7Lz",
      name: "Party Vibes",
      url: "/Images/party.jpeg",
    },
    {
      id: "5rbvoRDSOdq5Otvz2hxUUm",
      name: "Love Vibes",
      url: "/Images/love.jpeg",
    },
    {
      id: "37i9dQZF1DXdFesNN9TzXT",
      name: "Sad/Breakup Vibes",
      url: "/Images/sadvibes.jpg",
    },
    {
      id: "7zNvXEjgmE1110slXAuZie",
      name: "Motivational Vibes",
      url: "/Images/workoutvibes.jpeg",
    },
    {
      id: "37i9dQZF1DWURfu7Lk3xJ1",
      name: "Meditation",
      url: "/Images/images.jpeg",
    },
    {
      id: "37i9dQZF1DWTbzY5gOVvKd",
      name: "Jazzy Romance",
      url: "/Images/jazzy.jpeg",
    },
  ];
  return (
    <div className="flex flex-wrap">
      {moods.map((element) => {
        return (
          <>
            <Card
              variant="plain"
              sx={{
                width: 300,
                bgcolor: "initial",
                p: 0,
              }}
              className="p-1"
            >
              <Box sx={{ position: "relative" }}>
                <AspectRatio ratio="4/3">
                  <figure>
                    <Image
                      src={element.url}
                      loading="lazy"
                      width={300}
                      height={300}
                      alt="Yosemite by Casey Horner"
                    />
                  </figure>
                </AspectRatio>
                <CardCover
                  className="gradient-cover"
                  sx={{
                    "&:hover, &:focus-within": {
                      opacity: 1,
                    },
                    opacity: 0,
                    transition: "0.1s ease-in",
                    background:
                      "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
                  }}
                >
                  {/* The first box acts as a container that inherits style from the CardCover */}
                  <div>
                    <Box
                      sx={{
                        p: 2,
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        flexGrow: 1,
                        alignSelf: "flex-end",
                      }}
                      className="flex justify-center"
                    >
                      <Typography level="h2" noWrap sx={{ fontSize: "lg" }}>
                        <Link
                          href={`/palylist/${element.id}`}
                          overlay
                          underline="none"
                          sx={{
                            color: "#fff",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            display: "block",
                          }}
                        >
                          {element.name}
                        </Link>
                      </Typography>
                    </Box>
                  </div>
                </CardCover>
              </Box>
            </Card>
          </>
        );
      })}
    </div>
  );
}
