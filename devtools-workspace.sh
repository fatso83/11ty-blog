#!/usr/bin/env bash

mkdir -p src/site/.well-known/appspecific
cat > src/site/.well-known/appspecific/com.chrome.devtools.json << EOF
{
  "workspace": {
    "root": "$PWD/src/site",
    "uuid": "53b029bb-c989-4dca-969b-835fecec3717"
  }
}
EOF
