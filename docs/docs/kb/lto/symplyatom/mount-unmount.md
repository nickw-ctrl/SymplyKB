# SymplyATOM – Mount / Unmount tape

- **Mount** loads a compatible, LTFS‑formatted tape and mounts it in the OS.
- **Unmount** unmounts and ejects the tape.

Mount may fail if no tape is present, the tape is not LTFS‑formatted, or the tape generation isn’t supported by the drive (e.g., LTO‑6 in an LTO‑9 drive shows “J” on the SCD).  
If you unmounted using the OS, press **Unmount** again or reselect the drive in SymplyATOM to resync.

Remember: LTFS does not allow certain characters in file/folder names: `* ? < > " | \`

Source: https://gosymply.freshdesk.com/support/solutions/articles/80000979513-symplyatom-mount-unmount-tape
