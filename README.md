# vscode-babel-debug-example
vscode babel debug example

## debugging with babel

The idea is to first use babel to generate the file and source-map, and then run the program. The following is the vscode setting steps

1. Add Task
    ```json
    // # .vscode/tasks.json
    {
        "version": "2.0.0",
        "tasks": [
            {
                "label": "build",
                "type": "shell",
                "command": "babel",
                "args": [
                    "src",
                    "-d",
                    "lib/src",
                    "-s"
                ]
            }
        ]
    }
    ```
2. Add Launch
    ```json
    // # .vscode/launch.json
    {
        "version": "0.2.0",
        "configurations": [
            {
                "type": "node",
                "request": "launch",
                "name": "Launch Babel",
                "program": "${workspaceRoot}/lib/src/index.js",
                "cwd": "${workspaceRoot}",
                "preLaunchTask": "build",
                "outFiles": [
                    "${workspaceRoot}/lib/src/**.js"
                ]
            }
        ]
    }
    ```
3. Run Launch
    
    Pressing Ctrl+Shift+B or running Run Build Task... 

## Some Questions

- Q. How to make the terminal does not show by default ?
- A. You can set `reveal` to **"never"**
    ```json
    // # .vscode/launch.json
    {
        "version": "2.0.0",
        "tasks": [
            {
                "label": "build",
                "type": "shell",
                "command": "babel",
                "args": [
                    "src",
                    "-d",
                    "lib/src",
                    "-s"
                ],
                "presentation": {
                    "echo": true,
                    "reveal": "never",
                    "focus": false,
                    "panel": "shared"
                }
            }
        ]
    }
    ```

## more see
https://code.visualstudio.com/docs/editor/debugging

https://code.visualstudio.com/docs/editor/tasks

http://babeljs.io/docs/usage/cli/

https://stackoverflow.com/questions/38557822/debugging-in-visual-studio-code-with-babel-node

https://github.com/zinserjan/mocha-webpack/issues/67