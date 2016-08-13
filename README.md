Dzone/kefka:- https://dzone.com/articles/running-apache-kafka-on-windows-os

Running Kafka Server:- .\bin\windows\kafka-server-start.bat .\config\server.properties

Creating topics:- kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test

Creating a Producer :- kafka-console-producer.bat --broker-list localhost:9092 --topic test

Creating a Consumer:- kafka-console-consumer.bat --zookeeper localhost:2181 --topic test
