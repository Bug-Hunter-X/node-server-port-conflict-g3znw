# Node.js Server Port Conflict

This repository demonstrates a common issue encountered when running Node.js servers: port conflicts.

## The Bug

The `bug.js` file contains a simple HTTP server that attempts to listen on port 8080.  If another process is already using this port (e.g., another server or application), the server will fail to start. The error message may not always be descriptive, making it challenging to diagnose the root cause.  

## The Solution

The `bugSolution.js` file provides a more robust approach to handling port conflicts.  It attempts to listen on the specified port, and if it fails, it gracefully handles the error and provides helpful information.