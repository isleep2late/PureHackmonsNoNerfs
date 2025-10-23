#!/bin/bash

# Create a temporary script that activates the environment and starts the bot
cat > /tmp/leftovers_start.sh << 'INNER_EOF'
#!/bin/bash
source /<YOUR_DIRECTORY>/venv/leftovers-again/bin/activate
unset NPM_CONFIG_PREFIX
unset npm_config_prefix
cd /<YOUR_DIRECTORY>/leftovers-again

echo "=========================================="
echo "Starting leftovers-again bot..."
echo "=========================================="
echo ""

# Run the npm start command
npm start -- --bot=src/bot.js

# Keep the terminal open after the process ends
echo ""
echo "=========================================="
echo "Bot process ended. Press Enter to close."
echo "=========================================="
read
INNER_EOF

chmod +x /tmp/leftovers_start.sh

# Open terminal and run the script
gnome-terminal -- /tmp/leftovers_start.sh
