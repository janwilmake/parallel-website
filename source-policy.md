Title: Introducing Source Policy

URL Source: http://parallel.ai/blog/source-policy

Published Time: 2025-07-08T18:47:48Z

Markdown Content:
Introducing Source Policy: Precise control over web research sources | Enterprise Deep Research API for ChatGPT & Claude

===============

[Parallel](http://parallel.ai/)[About](http://parallel.ai/about)[About](https://parallel.ai/about)[Blog](http://parallel.ai/blog)[Blog](https://parallel.ai/blog)[Docs](https://docs.parallel.ai/introduction/quickstart)[Docs](https://docs.parallel.ai/introduction/quickstart)

[Start Building P](https://platform.parallel.ai/)[Start Building](https://platform.parallel.ai/)

Menu[Menu]

Human Machine

#Introducing Source Policy
==========================

Tags:Product Release

Reading time:1 min

![Image 1: Starting today, Source Policy is available for both the Parallel Task API and Search API - giving you granular control over which sources your AI agents access and how results are prioritized.](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F9eec7c7314218135df8fd7a83b1c6d3b953eece9-1528x1016.png&w=3840&q=75)

Starting today, Source Policy is available for both the [Parallel Task API](https://parallel.ai/blog/parallel-task-api)[Parallel Task API]($https://parallel.ai/blog/parallel-task-api) and [Search API](https://parallel.ai/blog/parallel-search-api)[Search API]($https://parallel.ai/blog/parallel-search-api) - giving you granular control over which sources your AI agents access and how results are prioritized.

##****What is Source Policy?****
--------------------------------

Source Policy lets you define exactly which domains your research should include and exclude. With two simple parameters, you can shape how Parallel crawls and reasons over the web:

*   -****include_domains****: Restrict queries to specific trusted domains
*   -****exclude_domains****: Block unreliable or irrelevant sources

###Configure your source policy 

1

2

3

4

5

6

7

8

9

10

11

12

13

14

```
curl -X POST "https://api.parallel.ai/v1/tasks/runs" \
  -H "x-api-key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -H "parallel-beta: source-policy-2025-07-03" \
  -d '{
      "task_spec": {
        "output_schema": "How many employees are there in the company"
      },
      "input": "Parallel Web Systems",
      "processor": "core",
      "source_policy": {
        "include_domains": ["linkedin.com"]
      }
    }'
```
```` curl -X POST "https://api.parallel.ai/v1/tasks/runs" \  -H "x-api-key: YOUR_API_KEY" \  -H "Content-Type: application/json" \  -H "parallel-beta: source-policy-2025-07-03" \  -d '{      "task_spec": {        "output_schema": "How many employees are there in the company"      },      "input": "Parallel Web Systems",      "processor": "core",      "source_policy": {        "include_domains": ["linkedin.com"]      }    }'````

##****Why Source Policy matters****
-----------------------------------

Production AI applications demand reliable, verifiable sources. Whether you're conducting due diligence that requires SEC filings, sales research that needs company websites, or competitive analysis that excludes certain unreliable publishers - Source Policy ensures your agents access exactly the right information.

Instead of post-processing results to filter sources, you can now constrain the Parallel web research pipeline from the start. This reduces noise, improves accuracy, and gives you confidence that outputs stem from sources you trust.

##****Start building****
------------------------

Source Policy is available today across all Task API and Search API processors. Get started in our [Developer Platform](https://platform.parallel.ai/)[Developer Platform]($https://platform.parallel.ai) or dive into the [documentation](https://docs.parallel.ai/features/source-policy)[documentation]($https://docs.parallel.ai/features/source-policy).

![Image 2: Parallel avatar](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F9a2c0f2e9634a95512da83f8354aef9d5bf400aa-128x128.png&w=64&q=75)

By Parallel

July 8, 2025

### ##Related Posts 9

[![Image 3: Parallel Search MCP Server in Devin](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2Fdfc00df5061085ec771f28d263b231d4c53747c3-1600x1044.png&w=3840&q=75) ![Image 4: Parallel avatar](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F9a2c0f2e9634a95512da83f8354aef9d5bf400aa-128x128.png&w=64&q=75) ### -[Parallel Search MCP Server in Devin](https://parallel.ai/blog/parallel-search-mcp-in-devin) Tags:Product Release Reading time:2 min](http://parallel.ai/blog/parallel-search-mcp-in-devin)

[![Image 5: Introducing Tool Calling via MCP Servers](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2Fe220ba8a89dfaeb943f943fc92636629a0b9ba14-1600x1600.png&w=3840&q=75) ![Image 6: Parallel avatar](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F9a2c0f2e9634a95512da83f8354aef9d5bf400aa-128x128.png&w=64&q=75) ### -[Introducing Tool Calling via MCP Servers](https://parallel.ai/blog/mcp-tool-calling) Tags:Product Release Reading time:2 min](http://parallel.ai/blog/mcp-tool-calling)

[![Image 7: Introducing the Parallel Search MCP Server ](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F32cf3f1026d452dbaed58e8df4d7b487166d423a-1972x1972.png&w=3840&q=75) ![Image 8: Parallel avatar](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F9a2c0f2e9634a95512da83f8354aef9d5bf400aa-128x128.png&w=64&q=75) ### -[Introducing the Parallel Search MCP Server ](https://parallel.ai/blog/search-mcp-server) Tags:Product Release Reading time:2 min](http://parallel.ai/blog/search-mcp-server)

[![Image 9: The Parallel Task Group API](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F5b63138a650248d4454f306ba72d99dc1572e08a-1600x946.png&w=3840&q=75) ![Image 10: Parallel avatar](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F9a2c0f2e9634a95512da83f8354aef9d5bf400aa-128x128.png&w=64&q=75) ### -[The Parallel Task Group API](https://parallel.ai/blog/task-group-api) Tags:Product Release Reading time:1 min](http://parallel.ai/blog/task-group-api)

[![Image 11: State of the Art Deep Research APIs](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F897a6d4a4d5caf5657b59cdc1dc99de0641c66df-1600x900.png&w=3840&q=75) ![Image 12: Parallel avatar](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F9a2c0f2e9634a95512da83f8354aef9d5bf400aa-128x128.png&w=64&q=75) ### -[State of the Art Deep Research APIs](https://parallel.ai/blog/deep-research) Tags:Benchmarks Reading time:3 min](http://parallel.ai/blog/deep-research)

[![Image 13: Introducing the Parallel Search API ](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2Ff61c8461515390c7e546ee3ac1b470a4f79084cc-2560x1704.png&w=3840&q=75) ![Image 14: Parallel avatar](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F9a2c0f2e9634a95512da83f8354aef9d5bf400aa-128x128.png&w=64&q=75) ### -[Introducing the Parallel Search API ](https://parallel.ai/blog/parallel-search-api) Tags:Product Release Reading time:2 min](http://parallel.ai/blog/parallel-search-api)

[![Image 15: Introducing the Parallel Chat API - a low latency web research API for web based LLM completions. The Parallel Chat API returns completions in text and structured JSON format, and is OpenAI Chat Completions compatible. ](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F780ef9d2c09f2e3526a0d11a4bda9eb0a45ef391-2560x1704.jpg&w=3840&q=75) ![Image 16: Parallel avatar](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F9a2c0f2e9634a95512da83f8354aef9d5bf400aa-128x128.png&w=64&q=75) ### -[Introducing the Parallel Chat API ](https://parallel.ai/blog/chat-api) Tags:Product Release Reading time:1 min](http://parallel.ai/blog/chat-api)

[![Image 17: Parallel Web Systems introduces Basis with calibrated confidences - a new verification framework for AI web research and search API outputs that sets a new industry standard for transparent and reliable deep research. ](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F20273a28dbb0a5ee55784f4c9f7050427094f4eb-2672x1512.png&w=3840&q=75) ![Image 18: Parallel avatar](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F9a2c0f2e9634a95512da83f8354aef9d5bf400aa-128x128.png&w=64&q=75) ### -[Introducing Basis with Calibrated Confidences ](https://parallel.ai/blog/introducing-basis-with-calibrated-confidences) Tags:Product Release Reading time:4 min](http://parallel.ai/blog/introducing-basis-with-calibrated-confidences)

[![Image 19: The Parallel Task API is a state-of-the-art system for automated web research that delivers the highest accuracy at every price point. ](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F96491c652ee4988fd9866d1b7619407582879e64-2576x1448.png&w=3840&q=75) ![Image 20: Parallel avatar](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F9a2c0f2e9634a95512da83f8354aef9d5bf400aa-128x128.png&w=64&q=75) ### -[Introducing the Parallel Task API](https://parallel.ai/blog/parallel-task-api) Tags:Product Release,Benchmarks Reading time:4 min](http://parallel.ai/blog/parallel-task-api)

![Company Logo](https://parallel.ai/parallel-logo-540.png)

### Company

*   [hello@parallel.ai](mailto:hello@parallel.ai)[hello@parallel.ai](mailto:hello@parallel.ai)

### Resources

*   [About](http://parallel.ai/about)[About](https://parallel.ai/about)
*   [Docs](https://docs.parallel.ai/)[Docs](https://docs.parallel.ai)
*   [Blog](http://parallel.ai/blog)[Blog](https://parallel.ai/blog)
*   [Changelog](https://docs.parallel.ai/resources/changelog)[Changelog](https://docs.parallel.ai/resources/changelog)
*   [Careers](https://jobs.ashbyhq.com/parallel)[Careers](https://jobs.ashbyhq.com/parallel)

### Info

*   [Terms](http://parallel.ai/terms-of-service)[Terms](https://parallel.ai/terms-of-service)
*   [Privacy](http://parallel.ai/privacy-policy)[Privacy](https://parallel.ai/privacy-policy)
*   [Trust Center](https://trust.parallel.ai/)[Trust Center](https://trust.parallel.ai/)

[LinkedIn](https://www.linkedin.com/company/parallel-web/about/)[LinkedIn](https://www.linkedin.com/company/parallel-web/about/)

Parallel Web Systems Inc. 2025
