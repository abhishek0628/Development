import os

os.chmod("file.txt", 0o644)

import os

print(os.access("file.txt", os.R_OK))  # can read?
print(os.access("file.txt", os.W_OK))  # can write?
print(os.access("file.txt", os.X_OK))  # can execute?
'''
🧠 Common permission codes
Code	Meaning
0o777	everyone can do everything (dangerous)
0o755	owner full, others read+execute
0o644	owner read/write, others read
0o600	only owner can read/write
'''