import OppositeContentTimeline from "./components/timeline";
import * as React from "react";
import { Box, Container } from "@mui/material";
import ProgressTimeline from "./components/timeline";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container maxWidth="sm">
        <Box>
          <ProgressTimeline />
        </Box>
      </Container>
    </main>
  );
}
