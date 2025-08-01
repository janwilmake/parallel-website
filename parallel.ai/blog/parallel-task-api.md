Title: Introducing the Parallel Task API

URL Source: http://parallel.ai/blog/parallel-task-api

Published Time: 2025-04-24T21:32:51Z

Markdown Content:
The state-of-the-art system for automated web research

Tags:Product Release,Benchmarks

Reading time:4 min

At [Parallel Web Systems](https://parallel.ai/)[Parallel Web Systems]($https://parallel.ai/), we’ve been busy [building infrastructure for a web built for AIs](http://parallel.ai/about)[building infrastructure for a web built for AIs]($/about). Today, we’re excited to announce our first product: the Parallel Task API.

The [Parallel Task API](https://docs.parallel.ai/)[Parallel Task API]($https://docs.parallel.ai) offers developers and enterprises a robust, reliable, and highly scalable solution for obtaining data, research findings, and insights from the internet. It has been built and optimized for repeated workflows over information on the open web that demand scalability and quality. Instead of engineering bespoke and complex AI+human workflows, users simply declare what information and insights they need. Our API seamlessly orchestrates the querying, ranking, retrieval, reasoning, validation, and synthesis to deliver this information as structured outputs.

Beyond simplifying the interface for our customers, our declarative approach enables optimization across a wide range of query plans, resulting in unprecedented accuracy. We provide customers with a choice of processors, each with a budget across compute and retrieval, and automatically optimized to achieve peak performance. This allows us to offer simple, transparent, and predictable pricing while delivering the highest quality results across a wide range of use cases across a wide range of price points.

Every response includes comprehensive citations linking to source materials and detailed reasoning for every output field. For most processors, we also provide confidence scores that are calibrated to reflect the uncertainty for each output field. These features make the Parallel Task API an ideal choice for production systems and workflows with the most exacting requirements for accuracy, scale, and auditability.

##State-of-the-art performance, priced for scaled use
-----------------------------------------------------

The Parallel Task API sets a new standard on web research benchmarks, both academic and ones we’ve built inspired by actual customer use cases spanning several domains.

While [SimpleQA](https://openai.com/index/introducing-simpleqa/)[SimpleQA]($https://openai.com/index/introducing-simpleqa/) measures factual accuracy on straightforward questions, we developed a proprietary benchmark suite called WISER that tests real-world, customer-inspired use cases across financial research, sales intelligence, recruitment, and other domains. Beyond just achieving the highest accuracy score, we outperform leading alternatives at every price point establishing a new pareto-frontier for both SimpleQA and WISER-Atomic.

##Motivated and designed for real-world applications, built for scale
---------------------------------------------------------------------

Today, Parallel powers production-grade workflows across a range of domains. As a SOC-II Type 2 certified platform, we're trusted by startups and enterprises alike to get structured insights from the web reliably and at scale. Our API serves diverse use cases across domains: insurance underwriters evaluating business risks, sales teams enriching CRM data with company intelligence, financial analysts conducting due diligence or sourcing, and professional service firms streamlining manual research workflows. The Task API is available today - we are excited to discover and serve use cases beyond our imagination.

![Image 1: Illustration demonstrating deep research API concepts, web search capabilities, or AI agent integration features](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F92663b0f1f8fa316d21743f04d7c32d9b7404d00-2576x1712.png&w=3840&q=75)

![](https://cdn.sanity.io/images/5hzduz3y/production/92663b0f1f8fa316d21743f04d7c32d9b7404d00-2576x1712.png)

To start building on our developer platform, [request access](https://parallel.ai/)[request access]($https://parallel.ai).

##_\_ Notes on methodology \__
------------------------------

****Standalone LLMs:**** While some might be tempted to compare Parallel to plain LLMs (e.g., GPT-4.5), we consider this a different category because standalone LLMs lack real-time web access. That said, the best standalone model we tested—GPT-4.5—achieved around 62.5% SimpleQA accuracy, which is impressive in its own right. However, it cannot update from current data or retrieve verified web sources in real time.

****Models and competitors used: ****For providers with publicly comparable AI-based web search APIs, we used all available configurations. However, given some providers have a large number of configurations, we show and report only the configurations on the provider’s own price-performance frontier on the WISER-Atomic benchmark. For SimpleQA, we chose 2-3 diverse configurations per provider to measure and report.********Perplexity reports an accuracy score of 93.9% for their Deep Research implementation on SimpleQA. On WISER-Atomic, Perplexity Deep Research scores 64% with an average cost of 290 CPM over the benchmark.

****LLM Evaluator:**** Each system's responses were scored by the same standard with the same evaluator and evaluation criteria. For SimpleQA, we used the standard evaluator. For our internal benchmark, we used our proprietary evaluator.

****Benchmark Dates:**** Testing was conducted between April 21 and April 24, 2025.

****Benchmark Details: ****For all models, we ran the full SimpleQA benchmark (~4,300 questions in total). While our internal benchmark is large and contains more complex tasks, we report on a test set of 121 questions that we refer to as the WISER-Atomic (Web Intelligence Search Evaluation Research) dataset. Three example questions are below.

****Limitations: ****There are differences in the latency of each model, which we do not report in this post. Most notably, the Parallel processors tested are slower than the competitors.

****Cost Standardization:**** Pricing models vary across all providers benchmarked. Parallel has a standardized and transparent per-query pricing model. For APIs with token-based billing (OpenAI, Perplexity, etc.), we used publicly listed prices and normalized them to a consistent cost per thousand queries (CPM) as measured on the benchmark. As a result, the prices for the same model may vary across benchmarks.

****Example questions from WISER-Atomic****

![Image 2: Parallel avatar](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F9a2c0f2e9634a95512da83f8354aef9d5bf400aa-128x128.png&w=64&q=75)

By Parallel

April 24, 2025

### ##Related Posts 10
