dockerfile
Whiteboard: https://app.eraser.io/workspace/yTPql82lXyOpbyX63Xgn


docker used to runs DBs/Redix/ other Auxilary Services locally
This is usefull when we dont wanna pollute our fileSystem w/ unnec deps.
Bring Up and Down DBs/#Kafka/SQL/#Redix & clean our machine.

But the Problem w/ this Feat. is -
This is a Problem for DBs.
    - We want to retain our DBs across restarts - [Volumes]
    - Allow one Docker container to tak to other Doc.Container - [Networks]
    