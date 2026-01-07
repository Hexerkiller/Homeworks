#!/bin/bash
address="aliexpress.com"
max_ping_time=100
max_failures=3

count=0

while :;
do
	if ping -c 1 $address > /dev/null;
	then
		count=0
		time=$(ping -c 1 $address | awk -F "time=| ms" '{print $2}' | awk -F "." '{print $1}')
#		echo "time =  $time ms "
		if (( time > max_ping_time ));
			then
			echo -e "Ping time to $address is over $max_ping_time ms:  $time  ms"
		fi
	else
		((count++))
		if [ $count -eq $max_failures ];
			then
				echo "Ping to $address Crashed"
				count=0
		fi
	fi
	sleep 1
done
