#!/bin/bash
##
# Create an empty variable, this will be set later
#
DC_ENDPOINT=""

##
# Set the correct DC endpoint
#
if [ "$REGION" = 'eu' ]; then
    DC_ENDPOINT="eu-central-1"
else
    DC_ENDPOINT="us-west-1"
fi

##
# Add some extra logs
#
echo "**************** PUBLISH RE-RUN EXECUTABLE TO SAUCELABS WITH THIS DATA ******************"
echo "DC_ENDPOINT             => $DC_ENDPOINT"

curl \
  -F "payload=@scripts/mac_download.sh" \
  -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" \
  "https://api.$DC_ENDPOINT.saucelabs.com/v1/storage/upload"
curl \
  -F "payload=@scripts/windows_download.bat" \
  -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" \
  "https://api.$DC_ENDPOINT.saucelabs.com/v1/storage/upload"
