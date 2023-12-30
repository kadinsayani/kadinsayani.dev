---
title: "Building a Shell in Rust"
id: "building-a-shell-in-rust"
description: "A beginner friendly read on building a Unix-like shell in Rust. Includes a discussion on Rust error handling, pattern matching, and processes."
author: Kadin Sayani
pubDate: 2023-12-14
---

Embarking on a journey through the expansive terrain of Rust, I find myself driven by the ambition to acquire the prowess of a seasoned systems developer. One intriguing idea that crossed my mind was to create my own Unix shell. In this blog post, I'll guide you through the process of crafting a shell program using Rust, a powerful systems programming language!

## What is a shell?

A Unix shell is a program that provides a command-line interface (CLI) for Unix-like operating systems. Users can enter text commands which execute programs and display their output. The shell interprets these commands and communicates with the operating system to execute them, acting as a bridge between the user and the system. It's a powerful tool, allowing users to manipulate files, run scripts, and perform complex tasks with just a few keystrokes.

## How does a shell work?

1. Command Input
- Users interact with a shell by entering commands into a terminal.
2. Command Parsing
- The shell parses the command entered by the user.
3. Command Execution and Process Creation
- The shell locates the executable file associated with the command, and creates a new process to execute the command. The new process is a child of the shell process.

Of course, modern shells include more features such as shell scripting, I/O redirection (redirecting input/output or pipes), job control, etc. For the purposes of this blog, we'll just focus on executing commands.

## Prerequisites

If you'd like to follow along with this blog post, you'll need to have Rust installed. It would also help to have a basic understanding of Unix-like environments and programming.

## Creating a Rust Application

```zsh
cargo new rustsh
cd rustsh
```

The `cargo new rustsh` command creates a new Rust application in a directory named `rustsh`. The `new` command generates a "Hello, World!" program in a file named `main.rs` and a `Cargo.toml` file, which is the package manifest. The `main.rs` file is located in the `src` directory. This is where we'll write the code for our shell.

The `cd rustsh` command changes the current directory to the `rustsh` directory, which is where we'll be working.

By default, `cargo new` creates a binary application, which is exactly what we need for our shell. A binary application is an application that's compiled to machine code and can be directly executed by the computer's operating system. This is in contrast to a library, which is a collection of code that other programs can use.

To compile and run the application, you can use the `cargo run` command. This will compile the `main.rs` file into a binary executable and then run that executable. You should see the "Hello, World!" message printed to the terminal.

## Adding Project Dependencies

For our project, we will need to add the following dependencies:

```toml
[dependencies]
shell-words = "1.1.0"
atty = "0.2"
```

And, we'll add the following crates to main.rs:

```rust
use atty::Stream;
use shell_words;
use std::{env, error::Error, io, io::Write, path::Path, process::Command};
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

The function begins by creating a mutable `String` buffer. The `read_line()` method from `io::stdin()` is then used to read user input into this buffer. The `read_line()` method is a blocking operation, meaning it will wait until the user has entered some input before it returns. It returns a `Result` type, which is an enum that can be either `Ok` (containing the number of bytes read) or `Err` (containing an error). 

The `?` operator is used here to handle this `Result`. If `read_line()` returns `Ok`, the `?` operator unwraps the result (i.e., it extracts the number of bytes read from the `Ok` variant). If `read_line()` returns `Err`, the `?` operator returns early from the function and propagates the error. This means that if an error occurs while reading the line, the function will stop executing and return the error.

In our `main()` function, we'll set up a loop which receives input, parses the text, and will eventually execute the command.

```rust
if atty::is(Stream::Stdout) {
    loop {
        let prompt: String = "$ ".to_string();
        print!("{}", prompt);
        io::stdout().flush().expect("Failed to flush stdout");
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

The shell loop calls `read_input()` and handles the `Result` accordingly. We then tokenize the input to separate the inputted command and arguments. After tokenizing, the command and arguments are ready to be processed and executed by the shell.

## Executing Commands

Next, we'll add a function called `execute_command()` This function will take a reference to the command (a string slice) and an array of arguments. If you're unfamiliar with slices, I recommend taking a look at the [Rust documentation](https://doc.rust-lang.org/book/ch04-03-slices.html).

```rust
fn execute_command(command: &str, args: &[String]) -> Result<String, Box<dyn Error>> {
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

In this function, we use pattern matching to handle different commands. First, we add a custom implementation for the `cd` command, which changes the current working directory to the path provided as an argument. If changing the directory is successful, we return a newline character as a `String`; if it fails, we return an error message.

For all other commands, we use the `std::process::Command` crate to spawn a new process to execute the given command with the provided arguments. The `Command::new(command)` function creates a new `Command` that, when configured, can spawn a process. The `args(args)` method adds arguments to the command, and the `output()` method captures the output of the command when it finishes. The `expect("Failed to execute command")` call will panic if the command fails to execute.

The function then checks whether the command was successful by calling `output.status.success()`. If the command was successful, it returns the standard output (`stdout`); if it was not, it returns the standard error (`stderr`). Both `stdout` and `stderr` are returned as `String`s.

We just have one last thing to do, and that is update our `main()` function to call `execute_command()`.

```rust
// previous code in main()

match execute_command(&command, &args) {
    Ok(result) => println!("{}", result),
    Err(err) => eprintln!("{:?}", err)
}
```

Great! We now have a working shell.

## Wrap Up

In this blog post, we've journeyed through the process of building a basic Unix-like shell in Rust. We've delved into key concepts such as Rust error handling, pattern matching, and managing processes. I hope this post has not only provided you with a practical understanding of these concepts, but also sparked your curiosity to explore the vast capabilities of Rust. Remember, this is just the beginning - there's a whole world of advanced features and techniques in shell programming and Rust waiting for you to discover. Happy coding!