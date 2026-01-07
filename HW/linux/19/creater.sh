#!/bin/bash

DIR="/opt/150825-wde/ViiPleva/sort_task/old"

mkdir -p "$DIR"

cd "$DIR" || exit 1

for i in {1..100};
	do

	NAME="file_$RANDOM.txt"
	touch "$NAME"
done 

echo " создано файлы в $DIR"
