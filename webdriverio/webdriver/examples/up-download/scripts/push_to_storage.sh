#!/bin/bash
##
# Create an empty variable, this will be set later
#
DC_ENDPOINT=""

##
# Set the correct DC endpoint
#
if [ "$REGION" = 'eu' ]; then
    DC_ENDPOINT="eu-central-1.saucelabs"
else
    DC_ENDPOINT="saucelabs"
fi

##
# Add some extra logs
#
echo "**************** PUBLISH RE-RUN EXECUTABLE TO SAUCELABS WITH THIS DATA ******************"
echo "DC_ENDPOINT             => $DC_ENDPOINT"

curl \
  -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" \
  -X POST \
  -H "Content-Type: application/octet-stream" \
  "https://$DC_ENDPOINT.com/rest/v1/storage/$SAUCE_USERNAME/mac_download.sh?overwrite=true" \
  --data-binary @scripts/mac_download.sh
curl \
  -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" \
  -X POST -H "Content-Type: application/octet-stream" \
  "https://$DC_ENDPOINT.com/rest/v1/storage/$SAUCE_USERNAME/windows_download.bat?overwrite=true" \
  --data-binary @scripts/windows_download.bat
