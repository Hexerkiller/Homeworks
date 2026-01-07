#!/bin/bash

for i in {1..10}
do
    TIME=$(date +"%H:%M:%S")
    PROC_COUNT=$(ps -e --no-headers | wc -l)
    echo "$TIME $PROC_COUNT"

done

lscpu > cpu_info.txt

grep '^NAME=' /etc/os-release > os_name_full.txt

grep '^NAME=' /etc/os-release | cut -d= -f2 | tr -d '"' > os_name_without.txt

for i in {50..100}
do
    touch "${i}.txt"
done

