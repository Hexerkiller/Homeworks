#!bin/bash
#my first script 

USER="Valerii Pleva"

echo "data: $(date)"

echo "hello $USER!"

echo "Directory $(pwd)"

BIOSET=$(ps aux | grep bioset | gerp -v grep |wc-l)

echo "count of bioset :$BIOSET "

PERM=$(ls -al /etc/passwd | awk '{print $1}')

echo 'Permission : $PERM'
