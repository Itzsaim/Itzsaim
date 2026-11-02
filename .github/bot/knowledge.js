// Everything the assistant knows about Abdul. Edit this file to update the bot.
module.exports = `
# Abdul Samad — profile

Role: Associate Software Engineer · AI/ML & Full-Stack Developer
Status: Fourth-year BS Software Engineering student, open to AI/ML and software engineering roles (full-time, internship or project work).
Location: Lahore, Pakistan (UTC+05:00)
Contact: email name.abdul06@gmail.com · LinkedIn linkedin.com/in/abdul-samad-80b875279 · GitHub github.com/Itzsaim · Portfolio portfolio-alpha-236c.vercel.app (resume downloadable there)

Summary: Builds retrieval-augmented generation (RAG) systems, computer-vision applications and secure web back ends, and measures them. Cares about the "unglamorous parts": evaluation, security and graceful failure.

## Education
- Bachelor of Software Engineering — University of Science and Technology, 2022 – present
- FSc Pre-Engineering — Sindh Muslim Government Science College, 2016 – 2018

## How he works
- Measure, don't guess: builds evaluation sets with answerable and unanswerable questions so changes are judged on numbers, and states the limits of those numbers.
- Secure by default: per-user data isolation, hashed passwords, validated uploads, rate limits and strict content-security policies from the first version.
- Fail gracefully: systems retry, fall back, or say "I don't know" instead of returning a confident wrong answer.

## Skills
- Languages: Python, C#, SQL, JavaScript
- AI/ML: RAG, LangChain, LLM agents and tool calling, computer vision (YOLO), scikit-learn, NLP (NLTK, TF-IDF), ChromaDB, FAISS, NumPy, pandas, evaluation design
- Backend & web: Django, FastAPI, Flask, ASP.NET Core MVC, Entity Framework Core, REST APIs, session & token auth, Tailwind CSS, jQuery
- Data & tools: SQL Server, SQLite, Git, GitHub, GitLab, GitHub Actions, pytest, deployment on Render and Vercel
- Strengths: problem solving, analytical thinking, communication, teamwork, quick learner

## Projects

### Smart Knowledge Assistant (github.com/Itzsaim/smart-knowledge-assistant)
Multi-user document Q&A: users upload PDF/TXT/Markdown files and ask questions; every answer cites the source page (e.g. "[1] handbook.pdf – p.3"), and the assistant abstains when documents don't contain the answer.
Stack: Python, FastAPI, Django ORM (repository pattern), SQLite, NumPy cosine-similarity search, Groq (Llama 3.3 70B), pytest, GitHub Actions.
Highlights: owner-scoped vector search so users can never see each other's chunks; conversational memory with follow-up query rewriting; extractive fallback that works with no LLM key; retries with backoff on LLM failures; hardened uploads (allow-list, size cap, PDF magic-byte checks, SHA-256 de-duplication); PBKDF2 passwords, hashed tokens, rate limits, strict CSP; foreign ids return 404.
Results: 49-question evaluation set (39 answerable, 10 unanswerable). Offline: 100% retrieval hit@5, 98.1% MRR, 97.4% answer correctness, 97.4%/94.7% citation recall/precision, 93.9% overall pass rate. 27 automated tests and a CI quality gate.

### FreshEye — AI fruit freshness detection & advisory (Final Year Project) (github.com/Itzsaim/Fresh_EyeAI)
Upload a fruit photo → a YOLO11-cls model gives a fresh/spoiled verdict with confidence → a LangChain tool-calling agent retrieves from a curated food-safety knowledge base and gives grounded storage advice, with follow-up chat about the same item.
Stack: Python, Ultralytics YOLO11, LangChain, ChromaDB, sentence-transformers embeddings, Flask, Flask-Login, SQLite/SQLAlchemy, Llama 3.x on Groq or local Ollama, Tailwind CSS, JavaScript.
Highlights: three-stage retriever (MMR search, multi-query expansion, embeddings-based contextual compression); hierarchical markdown-then-recursive splitting; declines to classify non-fruit images; one .env flag switches hosted vs local LLM; PBKDF2 auth with per-user history; health endpoint; batch inspect, AI agent and knowledge-base console pages.

### TubeDoc Chat — YouTube + document RAG chatbot (github.com/Itzsaim/tubedoc)
Turned a research notebook into a multi-user Django app with three modes: ask the video transcript, ask uploaded documents (PDF, DOCX, TXT, MD), or compare document vs video. Per-user history with JSON export.
Stack: Python, Django 5, LangChain, FAISS, OpenAI/Groq, fastembed (BGE-small), Tailwind CSS, jQuery, pytest + httpx, fpdf2.
Highlights: provider-agnostic LLM/embedding layer (a Groq key alone is enough); offline fake provider so the whole test suite runs without network; evaluation scaffold; session auth with CSRF.

### SMS & Email Spam Classifier (github.com/Itzsaim/sms-spam-detection)
NLP pipeline (NLTK tokenization, stop-word removal, Porter stemming, TF-IDF); compared Gaussian/Multinomial/Bernoulli Naive Bayes, SVC and XGBoost; Multinomial Naive Bayes ships with over 96% precision in a real-time Streamlit app.

### Content-Based Movie Recommender (github.com/Itzsaim/movie-recommended-system)
TMDB 5000 dataset; tags from genres, keywords, top-3 cast and director; CountVectorizer + cosine similarity returns the top 5 similar films with live TMDB posters in Streamlit.

### Child Labour Education Program (CLEP) — team project
ASP.NET Core MVC child-welfare management app: CRUD modules, role-based authentication and authorization, AJAX, repository pattern, SQL Server via Entity Framework Core in a layered architecture. Source is not public.
`;
