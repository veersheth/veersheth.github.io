#show link: underline 
#set page(
 margin: (x: 20pt, y: 16pt),
)

#set text(
  size: 10.3pt
)

#let topic(item) = box(
  width: 100%,
  stroke: (bottom: 1pt),
  inset: 8pt,
  align(center,
  text(weight: "bold", item))
)

// #let topic(item) = align(center, [#item])

#text(1.1em)[*Veer Sheth*] #h(1fr) (+61) 045 2309 691 

#link("https://veersheth.github.io/")[veersheth.github.io] #h(1fr) 
#link("mailto:v.sheth@student.unsw.edu.au")[v.sheth\@student.unsw.edu.au] #h(1fr) 
#link("https://github.com/veersheth")[github.com/veersheth] #h(1fr)
#link("https://linkedin.com/in/veersheth")[linkedin.com/in/veersheth]

#topic("EDUCATION")

*University of New South Wales, Sydney, AU* #h(1fr) August 2023 – _Present_ 
- Bachelor of Science (Computer Science) 

*Podar International School,  Mumbai, IN* #h(1fr) March 2021 – February 2023 
- Cambridge Advanced/Advanced-Subsidiary Level Examinations 

#topic("EXPERIENCE")

*Casual Academic, UNSW School of Computer Science and Engineering* #h(1fr) Sep 2025 – _Present_ 
- Tutor for COMP1531 (Software Engineering Fundamentals), supporting a cohort of ~25 students across weekly labs and office hours
- Delivered targeted, one-on-one debugging and design guidance, raising student proficiency with agile/version-control workflows
- Graded assignments and project milestones against course rubrics, providing consistent, constructive feedback across the cohort
- Invigilated end-of-term examinations, ensuring exam conditions and academic integrity policies were upheld

*Front-End Intern, TikTok * #h(1fr) Feb 2025 - May 2025 
- Built internal micro-frontend tooling adopted across the TikTok LIVE team, streamlining day-to-day development workflows
- Shipped changes through code review, debugging, and testing cycles to maintain quality across a large-scale production codebase
- Gained hands-on experience with monorepos, PPE staging environments, and internal build tooling

*UI/UX Designer, DevSoc, UNSW* #h(1fr) Feb 2024 - Dec 2024 
- Designed and prototyped interfaces in Figma (low-fi wireframes and hi-fi mockups) for tools used by UNSW students
- Helped maintain a shared UI component library, cutting duplicate design work across DevSoc projects

#topic("PROJECTS")

*#link("https://github.com/veersheth/hypr-settings")[Hypr-settings]* #h(1fr) June 2026 \
Settings panel for the Hyprland window manager, unifying Wi-Fi, Bluetooth, display, sound, appearance, and system controls in a single GUI
- Python, PySide6
- CLI flags to open directly to any tab for integration with keybind daemons; single-instance enforcement via file lock
- Reproducible Nix dev environment


*#link("https://github.com/veersheth/quarry")[Quarry]* #h(1fr) December 2025  \
Centralized app launcher, clipboard manager, calculator, file searcher, AI interface, rofi replacement, shortcut launcher etc for Linux (_in continuous development_). 
- Svelte, Tauri, Rust
- Regex-based command-routing via user-editable TOML config; custom providers and shortcuts without code changes
- System tray + global hotkey toggle via companion Rust binary; reproducible Nix dev env with multi-distro CI pipeline

*Automation of Fetal Myocardial Index Calculations* #h(1fr) January 2026 \
Automated DICOM-based MIC calculation web app, replacing a manual clinical workflow with an automated pipeline
- Python, ReactJS
- Parsed DICOM ultrasound imaging data to automatically extract myocardial performance index measurements via a clinician-facing web front-end

*#link("https://github.com/veersheth/meditator")[Meditator]* #h(1fr) December 2024  \
Meditation tracker that helps gamify the habit. Built for a university
Hackathon>
- Dart, Flutter, Material Design

#topic("SKILLS")

*Languages and Frameworks* \ 
Python, JavaScript, C, C++, Rust, Java, Dart, Bash, VimScript, ReactJS, Svelte,
NextJS, Tauri, PyTorch, OpenCV

*Tools & Other* \
Figma, GNU/Linux, LaTeX, Typst, Claude Code, Technical Writing, Graphic Design,
Microsoft Office, Neovim
