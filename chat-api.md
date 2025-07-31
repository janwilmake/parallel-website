Title: Introducing the Parallel Chat API

URL Source: http://parallel.ai/blog/chat-api

Published Time: 2025-05-30T00:23:35Z

Markdown Content:
Introducing the Parallel Chat API | Enterprise Deep Research API for ChatGPT & Claude

===============

[Parallel](http://parallel.ai/)[About](http://parallel.ai/about)[About](https://parallel.ai/about)[Blog](http://parallel.ai/blog)[Blog](https://parallel.ai/blog)[Docs](https://docs.parallel.ai/introduction/quickstart)[Docs](https://docs.parallel.ai/introduction/quickstart)

[Start Building P](https://platform.parallel.ai/)[Start Building](https://platform.parallel.ai/)

Menu[Menu]

Human Machine

#Introducing the Parallel Chat API
==================================

Starting today, the Parallel Chat API is generally available in beta - bringing real-time web research to interactive AI applications using our rapidly growing web index.

Tags:Product Release

Reading time:1 min

![Image 1: Introducing the Parallel Chat API - a low latency web research API for web based LLM completions. The Parallel Chat API returns completions in text and structured JSON format, and is OpenAI Chat Completions compatible. ](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F780ef9d2c09f2e3526a0d11a4bda9eb0a45ef391-2560x1704.jpg&w=3840&q=75)

The Chat API returns OpenAI ChatCompletions compatible streaming text and JSON with the low latency your interactive apps need. It is built with the same obsession for price-performance that we’ve demonstrated with the [Task API](https://parallel.ai/blog/parallel-task-api)[Task API]($https://parallel.ai/blog/parallel-task-api).

###Python Code Snippet 

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

15

16

17

18

19

20

21

22

23

24

25

26

27

28

29

30

31

32

33

34

35

36

37

38

39

```
from openai import OpenAI

client = OpenAI(
    api_key="PARALLEL_API_KEY",  # Your Parallel API key
    base_url="https://beta.parallel.ai"  # Parallel's API beta endpoint
)

response = client.chat.completions.create(
    model="speed", # Parallel model name
    messages=[
        {"role": "user", "content": "What does Parallel Web Systems do?"}
    ],
    response_format={
        "type": "json_schema",
        "json_schema": {
            "name": "reasoning_schema",
            "schema": {
                "type": "object",
                "properties": {
                    "reasoning": {
                        "type": "string",
                        "description": "Think step by step to arrive at the answer",
                    },
                    "answer": {
                        "type": "string",
                        "description": "The direct answer to the question",
                    },
                    "citations": {
                        "type": "array",
                        "items": {"type": "string"},
                        "description": "Sources cited to support the answer",
                    },
                },
            },
        },
    },
)

print(response.choices[0].message.content)
```
```` from openai import OpenAI client = OpenAI(    api_key="PARALLEL_API_KEY",  # Your Parallel API key    base_url="https://beta.parallel.ai"  # Parallel's API beta endpoint) response = client.chat.completions.create(    model="speed", # Parallel model name    messages=[        {"role": "user", "content": "What does Parallel Web Systems do?"}    ],    response_format={        "type": "json_schema",        "json_schema": {            "name": "reasoning_schema",            "schema": {                "type": "object",                "properties": {                    "reasoning": {                        "type": "string",                        "description": "Think step by step to arrive at the answer",                    },                    "answer": {                        "type": "string",                        "description": "The direct answer to the question",                    },                    "citations": {                        "type": "array",                        "items": {"type": "string"},                        "description": "Sources cited to support the answer",                    },                },            },        },    },) print(response.choices[0].message.content)````

Last year, we started building our own web crawler and index, recognizing that AIs need native infrastructure to query and reason over the web. The Chat API answers instantly using our index, while the Task API combines our index with real-time web crawling for maximum accuracy and the freshest data. Both APIs return comprehensive citations so you can always verify responses.

![Image 2: Illustration demonstrating deep research API concepts, web search capabilities, or AI agent integration features](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2Fdfe299127abfeba88c55260ef84f9a465d733a65-1572x1080.gif&w=3840&q=75)

![](https://cdn.sanity.io/images/5hzduz3y/production/dfe299127abfeba88c55260ef84f9a465d733a65-1572x1080.gif)

##

****Start building.****
---------------------------

Get started in our [Developer Platform](https://platform.parallel.ai/play/chat)[Developer Platform]($https://platform.parallel.ai/play/chat) or dive into the [documentation](https://docs.parallel.ai/resources/chat-api)[documentation]($https://docs.parallel.ai/resources/chat-api).

![Image 3: Parallel avatar](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F9a2c0f2e9634a95512da83f8354aef9d5bf400aa-128x128.png&w=64&q=75)

By Parallel

May 30, 2025

### ##Related Posts 9

[![Image 4: Parallel Search MCP Server in Devin](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2Fdfc00df5061085ec771f28d263b231d4c53747c3-1600x1044.png&w=3840&q=75) ![Image 5: Parallel avatar](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F9a2c0f2e9634a95512da83f8354aef9d5bf400aa-128x128.png&w=64&q=75) ### -[Parallel Search MCP Server in Devin](https://parallel.ai/blog/parallel-search-mcp-in-devin) Tags:Product Release Reading time:2 min](http://parallel.ai/blog/parallel-search-mcp-in-devin)

[![Image 6: Introducing Tool Calling via MCP Servers](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2Fe220ba8a89dfaeb943f943fc92636629a0b9ba14-1600x1600.png&w=3840&q=75) ![Image 7: Parallel avatar](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F9a2c0f2e9634a95512da83f8354aef9d5bf400aa-128x128.png&w=64&q=75) ### -[Introducing Tool Calling via MCP Servers](https://parallel.ai/blog/mcp-tool-calling) Tags:Product Release Reading time:2 min](http://parallel.ai/blog/mcp-tool-calling)

[![Image 8: Introducing the Parallel Search MCP Server ](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F32cf3f1026d452dbaed58e8df4d7b487166d423a-1972x1972.png&w=3840&q=75) ![Image 9: Parallel avatar](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F9a2c0f2e9634a95512da83f8354aef9d5bf400aa-128x128.png&w=64&q=75) ### -[Introducing the Parallel Search MCP Server ](https://parallel.ai/blog/search-mcp-server) Tags:Product Release Reading time:2 min](http://parallel.ai/blog/search-mcp-server)

[![Image 10: Starting today, Source Policy is available for both the Parallel Task API and Search API - giving you granular control over which sources your AI agents access and how results are prioritized.](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F9eec7c7314218135df8fd7a83b1c6d3b953eece9-1528x1016.png&w=3840&q=75) ![Image 11: Parallel avatar](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F9a2c0f2e9634a95512da83f8354aef9d5bf400aa-128x128.png&w=64&q=75) ### -[Introducing Source Policy](https://parallel.ai/blog/source-policy) Tags:Product Release Reading time:1 min](http://parallel.ai/blog/source-policy)

[![Image 12: The Parallel Task Group API](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F5b63138a650248d4454f306ba72d99dc1572e08a-1600x946.png&w=3840&q=75) ![Image 13: Parallel avatar](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F9a2c0f2e9634a95512da83f8354aef9d5bf400aa-128x128.png&w=64&q=75) ### -[The Parallel Task Group API](https://parallel.ai/blog/task-group-api) Tags:Product Release Reading time:1 min](http://parallel.ai/blog/task-group-api)

[![Image 14: State of the Art Deep Research APIs](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F897a6d4a4d5caf5657b59cdc1dc99de0641c66df-1600x900.png&w=3840&q=75) ![Image 15: Parallel avatar](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F9a2c0f2e9634a95512da83f8354aef9d5bf400aa-128x128.png&w=64&q=75) ### -[State of the Art Deep Research APIs](https://parallel.ai/blog/deep-research) Tags:Benchmarks Reading time:3 min](http://parallel.ai/blog/deep-research)

[![Image 16: Introducing the Parallel Search API ](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2Ff61c8461515390c7e546ee3ac1b470a4f79084cc-2560x1704.png&w=3840&q=75) ![Image 17: Parallel avatar](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F9a2c0f2e9634a95512da83f8354aef9d5bf400aa-128x128.png&w=64&q=75) ### -[Introducing the Parallel Search API ](https://parallel.ai/blog/parallel-search-api) Tags:Product Release Reading time:2 min](http://parallel.ai/blog/parallel-search-api)

[![Image 18: Parallel Web Systems introduces Basis with calibrated confidences - a new verification framework for AI web research and search API outputs that sets a new industry standard for transparent and reliable deep research. ](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F20273a28dbb0a5ee55784f4c9f7050427094f4eb-2672x1512.png&w=3840&q=75) ![Image 19: Parallel avatar](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F9a2c0f2e9634a95512da83f8354aef9d5bf400aa-128x128.png&w=64&q=75) ### -[Introducing Basis with Calibrated Confidences ](https://parallel.ai/blog/introducing-basis-with-calibrated-confidences) Tags:Product Release Reading time:4 min](http://parallel.ai/blog/introducing-basis-with-calibrated-confidences)

[![Image 20: The Parallel Task API is a state-of-the-art system for automated web research that delivers the highest accuracy at every price point. ](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F96491c652ee4988fd9866d1b7619407582879e64-2576x1448.png&w=3840&q=75) ![Image 21: Parallel avatar](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F9a2c0f2e9634a95512da83f8354aef9d5bf400aa-128x128.png&w=64&q=75) ### -[Introducing the Parallel Task API](https://parallel.ai/blog/parallel-task-api) Tags:Product Release,Benchmarks Reading time:4 min](http://parallel.ai/blog/parallel-task-api)

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
