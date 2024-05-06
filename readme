**WC Tool**

**Description:**
The WC  tool is a command-line utility that provides functionality to calculate various statistics of a text file. It allows users to determine the length of a text file in terms of bytes, lines, characters, and words.

**Features:**
- Calculate the length of a text file in bytes.
- Count the number of lines in the text file.
- Count the number of characters in the text file, including whitespaces and newline characters.
- Count the number of words in the text file, delimited by whitespaces.

**Usage:**
To use the WC tool, follow these steps:

1. Open a command prompt or terminal window.

2. Navigate to the directory containing the WC tool executable.

3. Run the WC tool with the desired options and specify the path to the text file you want to analyze. Here's the general syntax:
   ```
   wc [OPTIONS] FILE
   ```

   - **Options:**
     - `-b`: Display the number of bytes in the file.
     - `-l`: Display the number of lines in the file.
     - `-c`: Display the number of characters in the file.
     - `-w`: Display the number of words in the file.

   - **FILE:** Specify the path to the text file you want to analyze.

## Adding WC Tool to System Path:

**For Windows:**

1. Locate the directory containing the WC tool executable (e.g., `rswc.bat`).
2. Copy the full path of this directory.
3. Open the Start menu and search for "Environment Variables" (or "Edit the system environment variables").
4. Click on "Environment Variables..." button.
5. In the "System Properties" window, click on the "Environment Variables..." button.
6. In the "Environment Variables" window, under "System variables", select the "Path" variable and click "Edit...".
7. In the "Edit Environment Variable" window, click "New" and paste the full path of the directory containing the WC tool executable.
8. Click "OK" on all windows to apply the changes.

Now you can open a new command prompt window and run the WC tool from any directory by simply typing `rswc`.

**For Ubuntu/Linux:**

1. Open a terminal window.
2. Navigate to the directory containing the WC tool executable (e.g., `rswc`).
3. Copy the full path of this directory.
4. Edit your `.bashrc` file by running:
   ```bash
   nano ~/.bashrc
5. Add the following line to the end of the file, replacing <full_path_to_wc> with the full path you copied:
    export PATH=$PATH:<full_path_to_wc>
6. Save the file by pressing Ctrl + X, then Y, and finally Enter.
7. Close and reopen the terminal or run source ~/.bashrc to apply the changes.
Now you can run the WC tool from any directory in the terminal by simply typing rswc.


**Demo:**

Suppose we have a text file named `example.txt` with the following content:
```
This is a sample text file.
It contains multiple lines
and words of varying lengths.
```

To calculate the statistics of the `example.txt` file using the WC tool, we can run the following commands:

- To display the number of bytes in the file:
  ```
  rrwc -c example.txt
  ```

  Output:
  ```
  76 example.txt
  ```

- To display the number of lines in the file:
  ```
  rrwc -l example.txt
  ```

  Output:
  ```
  3 example.txt
  ```

- To display the number of characters in the file:
  ```
  rrwc -c example.txt
  ```

  Output:
  ```
  76 example.txt
  ```

- To display the number of words in the file:
  ```
  rrwc -w example.txt
  ```

  Output:
  ```
  13 example.txt
  ```

**Screenshot:**
![Screenshot](screenshots/demo.png)


**License:**
MIT License