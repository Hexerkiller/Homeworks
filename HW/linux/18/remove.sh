#!/bin/bash

SOURCE_DIR="$HOME/Homeworks/HW/linux/18"
TARGET_DIR="$SOURCE_DIR/moved"

mkdir -p "$TARGET_DIR"
cd "$SOURCE_DIR" || exit 1

for repo in lesson*; do 

	if [ -d "$repo" ];then 
		echo "Moving $repo"

		mkdir -p "$TARGET_DIR/$repo/"

		cp -r "$repo/." "$TARGET_DIR/$repo/"

		rm -rf "$TARGET_DIR/$repo/.git"
	fi
done 
echo "Done"
