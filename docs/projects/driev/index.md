# Driev

Driev is a tool, written in Go, to run tasks in your shell. It is an easy to use tool that can help you to automate your daily tasks.


## Features

- **Simple**: Driev has a simple but powerful YAML based configuration file.
- **Easy to use**: Start one or more tasks (called jobs) with a single command using Driev.
- **Job dependencies**: You can define dependencies between jobs.
- **Foreach**: Run jobs with different sets of EnvVars in a foreach like loop using Driev.
- **Go templating**: Use Go templating to preprocess your scripts.


## Quickstart

### Download
Download the latest release, that meets your platform, from the [releases page](https://github.com/tippwark/driev/releases/latest) and extract it to a directory in your PATH.


### Create a configuration file

Create a file named `driev.yml` with the following content:
```yaml
hello:
  script:
    - echo "Hello from driev!"
```

### Run driev

Run driev with the following command:
```bash
driev run hello
```
`hello` is the name of the job defined in the configuration file.