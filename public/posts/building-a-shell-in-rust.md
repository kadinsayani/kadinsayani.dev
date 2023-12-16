---
title: "Building a Shell in Rust"
id: "building-a-shell-in-rust"
description: "Building a customizable Unix-like shell in Rust."
author: Kadin Sayani
pubDate: 2023-12-14
---

As I continue my quest across the vast Rust landscape, pursuing the knowledge of a rockstar systems developer, I ponder the thought of writing my own Unix shell. In this blog post, I'll walk you through the steps involved with writing a shell program in Rust! We'll cover the basics of a shell, as well as add support for customizing the prompt by editing a TOML config file.

## What is a shell?

A Unix Shell is a program that provides a CLI for Unix-like operating systems. User's can enter text commands which execute programs and display their output. 

## How does a shell work?

1. Command Input
- Users interact with a shell by entering commands into a terminal.
2. Command Parsing
- The shell parses the command entered by the user.
3. Command Execution and Process Creation
- The shell locates the executable file associated with the command, and creates a new process to execute the command. The new process is a child of the shell process.

Of course, modern shells include more features such as shell scripting, I/O redirection (redirecting input/output or pipes), job control, etc. For the purpose of this blog, we'll just focus on executing commands and setting up a custom prompt.

## Prerequisites

If you'd like to follow along with this blog post, you'll need to have Rust installed. It would also help to have a basic understanding of Unix-like environments and programming.

## Creating a Rust Application

Run the following commands in your terminal:

```zsh
cargo new rustsh
cd rustsh
```

## Adding Project Dependencies

For our project, we will need to add the following dependencies:

```toml
[dependencies]
shell-words = "1.1.0"
atty = "0.2"
colored = "2.0.4"
whoami = "1.4.1"
toml = "0.7.6"
serde = "1.0.188"
serde_derive = "1.0.188"
dirs = "2.0"
```

And, we'll add the following crates to main.rs:

```rust
use atty::Stream;
use colored::Colorize;
use shell_words;
use std::{env, error::Error, io, io::Write, path::Path, process::Command};
use whoami::username;
```

## Reading from stdin

First, we'll create a function to read input from stdin:

```rust
fn read_input() -> io::Result<String> {
    let mut buffer = String::new();
    io::stdin().read_line(&mut buffer)?;
    Ok(buffer.trim().to_string())
}
```

In our `main()` function, we'll set up a loop which receives input, parses the text, and will eventually execute the command.

```rust
if atty::is(Stream::Stdout) {
    loop {
        let prompt: String = "$";
        io::stdout().flush.expect("Failed to flush stdout");
        let input = match read_input() {
            Ok(input) => input,
            Err(err) => {
                eprintln!("{}", err);
                continue;
            }
        };
    
        let tokens = match shell_words::split(&input) {
            Ok(tokens) => tokens,
            Err(err) => {
                eprintln!("{}", err);
                continue;
            }
        };

        let command = &tokens[0];
        let args = &tokens[1..];
    }
}
```

## Executing Commands

Next, we'll add a function `execute_command()`:

```rust
fn execute_system_command(command: &str, args: &[String]) -> Result<String, Box<dyn Error>> {
    match command {
        "cd" => {
            let path = Path::new(&args[0]);
            match env::set_current_dir(&path) {
                Ok(()) => Ok('\n'.to_string()),
                Err(err) => Err(format!("Error: {}", err).into()),
            }
        }
        command => {
            let output = Command::new(command)
                .args(args)
                .output()
                .expect("Failed to execute command");

            if output.status.success() {
                Ok(String::from_utf8_lossy(&output.stdout).to_string())
            } else {
                Ok(String::from_utf8_lossy(&output.stderr).to_string())
            }
        }
    }
}
```

And update our `main()`:

```rust
// previous code

match execute_command(&command, &args) {
    Ok(result) => println!("{}, result),
    Err(err) => eprintln!("{:?}", err),
}
```

Great! We now have a working shell.

## Customizing the Prompt

