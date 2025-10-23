#!/bin/bash
# Launch Pokemon Showdown Cloudflare tunnel

gnome-terminal --tab --working-directory=/<YOUR_DIRECTORY>/pokemon-showdown \
--title="Cloudflare Tunnel" -- bash -c "cloudflared tunnel --url http://localhost:8000; exec bash"
