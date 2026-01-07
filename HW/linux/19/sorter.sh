#!/bin/bash

DIR_PATH="/opt/150825-wde/ViiPleva/sort_task"

find "$DIR_PATH/old" -type f -name "*[02468].txt" -exec mv -t "$DIR_PATH/new/" {} +

echo "ALL files moved"
