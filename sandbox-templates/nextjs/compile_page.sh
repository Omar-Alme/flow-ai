#!/bin/bash

# This script runs during building the sandbox template
# and makes sure the Next.js app is (1) running and (2) the `/` page is compiled
# Ensure Next.js doesn't try to open a browser
export BROWSER=none
export HOSTNAME=0.0.0.0
export PORT=3000

function ping_server() {
	counter=0
	response=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3000")
	while [[ ${response} -ne 200 ]]; do
	  let counter++
	  if  (( counter % 20 == 0 )); then
        echo "Waiting for server to start..."
        sleep 0.1
      fi

	  response=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3000")
	done
}

ping_server &
cd /home/user && npx next dev --turbopack