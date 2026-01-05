#!/bin/bash

DIR="/opt/150825-wde"

if [ ! -d "$DIR" ];then
	echo "Directory : $DIR  netu "
fi

echo "Check perm in catalog: $DIR"

ls -l "$DIR"

find "$DIR" -type f -name "*.sh" | while read -r FILE; do
	echo "found :$FILE"
	if [ ! -x "$FILE" ];then
		echo "add perm to do :$FILE"
		chmod +x "$FILE"
	else 
		echo "perm is yet on "

	fi
done
echo "Done"
