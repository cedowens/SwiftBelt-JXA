# SwiftBelt-JXA
This is JXA implementation of some SwiftBelt functions. I did not port over all functions, but the likely most useful functions:

- Check for Security tools

- Basic System Info

- Local Azure cred check

- Local ssh cred check

- Local aws cred check

- Running Apps

- zsh history

----------------

To run locally from a Terminal:

1. edit the final line of code from "return results" to "console.log(results)"

2. After final curly brace, add "SwiftBelt()" to invoke the SwiftBelt function.

3. From Terminal run: **% osascript SwiftBelt-JXA.js**

To run remotely via Mythic:

Download this SwiftBelt-JXA.js and via Mythic:

1. **jsimport SwiftBelt-JXA.js**
2. **jsimport_call SwiftBelt()**
3. Results will be returned in Mythic
