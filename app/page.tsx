"use client";

import { Container, Grid, Paper, Typography, Box, Avatar, Button, TextField, Card, CardContent, CardActions, IconButton, Chip, styled } from "@mui/material";
import {
  Home as HomeIcon,
  People as PeopleIcon,
  Work as WorkIcon,
  Notifications as NotificationsIcon,
  Message as MessageIcon,
  Search as SearchIcon,
  MoreHoriz as MoreHorizIcon,
  ThumbUp as ThumbUpIcon,
  Comment as CommentIcon,
  Share as ShareIcon,
  Send as SendIcon,
  PhotoCamera as PhotoCameraIcon,
  Videocam as VideocamIcon,
  Event as EventIcon,
  Article as ArticleIcon,
} from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
}));

export default function Home() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Paper
        elevation={0}
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              py: 1.5,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                LinkedIn
              </Typography>
              <Box
                sx={{
                  display: {  sm: "flex" },
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <TextField
                  size="small"
                  placeholder="Search"
                  InputProps={{
                    startAdornment: <SearchIcon sx={{ mr: 1 }} />,
                  }}
                  sx={{ width: { sm: 200, md: 300 } }}
                />
              </Box>
            </Box>
            <Box sx={{  display: { xs: "none", sm: "flex" }, gap: 1 }}>
              <IconButton>
                <HomeIcon />
              </IconButton>
              <IconButton>
                <PeopleIcon />
              </IconButton>
              <IconButton>
                <WorkIcon />
              </IconButton>
              <IconButton>
                <MessageIcon />
              </IconButton>
              <IconButton>
                <NotificationsIcon />
              </IconButton>
              
            </Box>
            <Box sx={{ display: { xs: "flex" } }}>
            <IconButton>
                <Avatar>U</Avatar>
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Paper>

      <Container maxWidth="lg" sx={{ py: 3 }}>
        <Grid container rowSpacing={3} columnSpacing={3}>
          <Grid
            size={{ xs: 12, sm: 12, md: 3 }}
          >
            <Item
              sx={{
                display: "flex",
                flexDirection: { xs: "row", sm: "row", md: "column" },
                flexWrap: { xs: "wrap", sm: "wrap", md: "nowrap" },
                gap: 0,
                alignItems: "stretch",
                "@media (max-width:470px)": {
                  flexDirection: "row",
                  flexWrap: "wrap",
                },
              }}
            >
              <Box
                sx={{
                  p: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                  flex: { xs: "1 1 240px", sm: "1 1 240px", md: "none" },
                  borderRight: { xs: 0, sm:1, md: 0 },
                  borderBottom: { xs: 0, sm: 0, md: 1 },
                  borderColor: "divider",
                  mr: { xs: 1, sm: 1, md: 0 },
                  
                }}
              >
                <Avatar sx={{ mr: 2 }}>JD</Avatar>
                <Box>
                  <Typography variant="subtitle1" fontWeight={600}>
                    John Doe
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Software Engineer
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  textAlign: "center",
                  gap: 2,
                  flex: { xs: "1 1 240px", sm: "1 1 240px", md: "none" },
                  borderTop: { xs: 0, sm: 0, md: 1 },
                  borderColor: "divider",
                  pl: { xs: 3, sm: 3, md: 2 },
                  "@media (max-width:470px)": {
                    borderTop: 0,
                    pl: 3,
                  },
                }}
              >
                <Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Profile viewers
                  </Typography>
                  <Typography variant="body2" fontWeight={600}>
                    150
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Post impressions
                  </Typography>
                  <Typography variant="body2" fontWeight={600}>
                    1,234
                  </Typography>
                </Box>
              </Box>
            </Item>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 6 }}>
            <Item>
            <Box sx={{ mb: 2, p: 2 }}>
              <Box sx={{ p: 2 }}>
                <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                  <Avatar>JD</Avatar>
                  <TextField
                    fullWidth
                    placeholder="Start a post"
                    variant="outlined"
                    size="small"
                  />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                  <IconButton size="small" sx={{ display: { xs: "inline-flex", sm: "none", md: "none" } }}>
                    <PhotoCameraIcon />
                  </IconButton>
                  <Button startIcon={<PhotoCameraIcon />} size="small" sx={{ display: { xs: "none", sm: "inline-flex", md: "inline-flex" } }}>
                    Photo
                  </Button>
                  <IconButton size="small" sx={{ display: { xs: "inline-flex", sm: "none", md: "none" } }}>
                    <VideocamIcon />
                  </IconButton>
                  <Button startIcon={<VideocamIcon />} size="small" sx={{ display: { xs: "none", sm: "inline-flex", md: "inline-flex" } }}>
                    Video
                  </Button>
                  <IconButton size="small" sx={{ display: { xs: "inline-flex", sm: "none", md: "none" } }}>
                    <EventIcon />
                  </IconButton>
                  <Button startIcon={<EventIcon />} size="small" sx={{ display: { xs: "none", sm: "inline-flex", md: "inline-flex" } }}>
                    Event
                  </Button>
                  <IconButton size="small" sx={{ display: { xs: "inline-flex", sm: "none", md: "none" } }}>
                    <ArticleIcon />
                  </IconButton>
                  <Button startIcon={<ArticleIcon />} size="small" sx={{ display: { xs: "none", sm: "inline-flex", md: "inline-flex" } }}>
                    Article
                  </Button>
                </Box>
              </Box>
            </Box>

            <Card sx={{ mb: 2 }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Avatar sx={{ mr: 2 }}>JD</Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle2" fontWeight={600}>
                      John Doe
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Software Engineer at Tech Corp · 2h
                    </Typography>
                  </Box>
                  <IconButton size="small">
                    <MoreHorizIcon />
                  </IconButton>
                </Box>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Excited to share that I&apos;ve completed a new project using React and TypeScript!
                  The experience has been amazing and I&apos;ve learned so much along the way.
                </Typography>
                <Box sx={{ p: 2, mb: 2 }}>
                  <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 0.5 }}>
                    Building Modern Web Applications
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    techcorp.com
                  </Typography>
                </Box>
              </CardContent>
              <CardActions>
                <IconButton size="small" sx={{ display: { xs: "inline-flex", sm: "none", md: "none" } }}>
                  <ThumbUpIcon />
                </IconButton>
                <Button startIcon={<ThumbUpIcon />} size="small" sx={{ display: { xs: "none", sm: "inline-flex", md: "inline-flex" } }}>
                  Like
                </Button>
                <IconButton size="small" sx={{ display: { xs: "inline-flex", sm: "none", md: "none" } }}>
                  <CommentIcon />
                </IconButton>
                <Button startIcon={<CommentIcon />} size="small" sx={{ display: { xs: "none", sm: "inline-flex", md: "inline-flex" } }}>
                  Comment
                </Button>
                <IconButton size="small" sx={{ display: { xs: "inline-flex", sm: "none", md: "none" } }}>
                  <ShareIcon />
                </IconButton>
                <Button startIcon={<ShareIcon />} size="small" sx={{ display: { xs: "none", sm: "inline-flex", md: "inline-flex" } }}>
                  Share
                </Button>
                <IconButton size="small" sx={{ display: { xs: "inline-flex", sm: "none", md: "none" } }}>
                  <SendIcon />
                </IconButton>
                <Button startIcon={<SendIcon />} size="small" sx={{ display: { xs: "none", sm: "inline-flex", md: "inline-flex" } }}>
                  Send
                </Button>
              </CardActions>
            </Card>

            <Card sx={{ mb: 2 }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Avatar sx={{ mr: 2 }}>JS</Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Jane Smith
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Product Manager · 5h
                    </Typography>
                  </Box>
                  <IconButton size="small">
                    <MoreHorizIcon />
                  </IconButton>
                </Box>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Just finished reading an excellent article about design systems. Highly recommend
                  checking it out!
                </Typography>
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
                  <Chip label="Design" size="small" />
                  <Chip label="UX" size="small" />
                  <Chip label="Product" size="small" />
                </Box>
              </CardContent>
              <CardActions>
                <IconButton size="small" sx={{ display: { xs: "inline-flex", sm: "none", md: "none" } }}>
                  <ThumbUpIcon />
                </IconButton>
                <Button startIcon={<ThumbUpIcon />} size="small" sx={{ display: { xs: "none", sm: "inline-flex", md: "inline-flex" } }}>
                  Like
                </Button>
                <IconButton size="small" sx={{ display: { xs: "inline-flex", sm: "none", md: "none" } }}>
                  <CommentIcon />
                </IconButton>
                <Button startIcon={<CommentIcon />} size="small" sx={{ display: { xs: "none", sm: "inline-flex", md: "inline-flex" } }}>
                  Comment
                </Button>
                <IconButton size="small" sx={{ display: { xs: "inline-flex", sm: "none", md: "none" } }}>
                  <ShareIcon />
                </IconButton>
                <Button startIcon={<ShareIcon />} size="small" sx={{ display: { xs: "none", sm: "inline-flex", md: "inline-flex" } }}>
                  Share
                </Button>
                <IconButton size="small" sx={{ display: { xs: "inline-flex", sm: "none", md: "none" } }}>
                  <SendIcon />
                </IconButton>
                <Button startIcon={<SendIcon />} size="small" sx={{ display: { xs: "none", sm: "inline-flex", md: "inline-flex" } }}>
                  Send
                </Button>
              </CardActions>
            </Card>

            <Card>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Avatar sx={{ mr: 2 }}>MB</Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Mike Brown
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Full Stack Developer · 1d
                    </Typography>
                  </Box>
                  <IconButton size="small">
                    <MoreHorizIcon />
                  </IconButton>
                </Box>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Looking for a senior developer role. Open to opportunities in fintech and
                  healthcare tech. Let&apos;s connect!
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton size="small" sx={{ display: { xs: "inline-flex", sm: "none", md: "none" } }}>
                  <ThumbUpIcon />
                </IconButton>
                <Button startIcon={<ThumbUpIcon />} size="small" sx={{ display: { xs: "none", sm: "inline-flex", md: "inline-flex" } }}>
                  Like
                </Button>
                <IconButton size="small" sx={{ display: { xs: "inline-flex", sm: "none", md: "none" } }}>
                  <CommentIcon />
                </IconButton>
                <Button startIcon={<CommentIcon />} size="small" sx={{ display: { xs: "none", sm: "inline-flex", md: "inline-flex" } }}>
                  Comment
                </Button>
                <IconButton size="small" sx={{ display: { xs: "inline-flex", sm: "none", md: "none" } }}>
                  <ShareIcon />
                </IconButton>
                <Button startIcon={<ShareIcon />} size="small" sx={{ display: { xs: "none", sm: "inline-flex", md: "inline-flex" } }}>
                  Share
                </Button>
                <IconButton size="small" sx={{ display: { xs: "inline-flex", sm: "none", md: "none" } }}>
                  <SendIcon />
                </IconButton>
                <Button startIcon={<SendIcon />} size="small" sx={{ display: { xs: "none", sm: "inline-flex", md: "inline-flex" } }}>
                  Send
                </Button>
              </CardActions>
            </Card>
            </Item>
          </Grid>

          <Grid
            size={{ md: 3 }}
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            <Item>
            <Box sx={{ p: 2 }}>
                <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 2 }}>
                  LinkedIn News
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" fontWeight={600} sx={{ mb: 0.5 }}>
                    Tech industry trends
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    5,234 readers
                  </Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" fontWeight={600} sx={{ mb: 0.5 }}>
                    Remote work insights
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    3,456 readers
                  </Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" fontWeight={600} sx={{ mb: 0.5 }}>
                    Career development
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    8,901 readers
                  </Typography>
                </Box>
              </Box>
            <Box sx={{ mt: 2, p: 2 }}>
                <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 2 }}>
                  People you may know
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Avatar sx={{ mr: 1.5 }}>AB</Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" fontWeight={600}>
                      Alice Brown
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      UX Designer
                    </Typography>
                  </Box>
                  <Button size="small" variant="outlined">
                    Connect
                  </Button>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Avatar sx={{ mr: 1.5 }}>CD</Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" fontWeight={600}>
                      Chris Davis
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Data Scientist
                    </Typography>
                  </Box>
                  <Button size="small" variant="outlined">
                    Connect
                  </Button>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar sx={{ mr: 1.5 }}>EF</Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" fontWeight={600}>
                      Emma Foster
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Product Manager
                    </Typography>
                  </Box>
                  <Button size="small" variant="outlined">
                    Connect
                  </Button>
                </Box>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
