Title: The Parallel Task Group API

URL Source: http://parallel.ai/blog/task-group-api

Published Time: 2025-07-02T17:56:29Z

Markdown Content:
Introducing the Parallel Task Group API | Enterprise Deep Research API for ChatGPT & Claude

===============

[Parallel](http://parallel.ai/)[About](http://parallel.ai/about)[About](https://parallel.ai/about)[Blog](http://parallel.ai/blog)[Blog](https://parallel.ai/blog)[Docs](https://docs.parallel.ai/introduction/quickstart)[Docs](https://docs.parallel.ai/introduction/quickstart)

[Start Building P](https://platform.parallel.ai/)[Start Building](https://platform.parallel.ai/)

Menu[Menu]

Human Machine

#The Parallel Task Group API
============================

Tags:Product Release

Reading time:1 min

![Image 1: The Parallel Task Group API](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F5b63138a650248d4454f306ba72d99dc1572e08a-1600x946.png&w=3840&q=75)

[Parallel Tasks](https://parallel.ai/blog/parallel-task-api)[Parallel Tasks]($https://parallel.ai/blog/parallel-task-api) are designed for large-scale workloads. When your pipeline needs to launch hundreds or thousands of independent web research calls, the new ****Task Group API**** wraps those operations into a single batch - giving you one identifier to create, monitor, and collect results from large parallel workloads.

###Create a Task Group

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

```
import httpx
from parallel.types import TaskRunCreateParams

client = httpx.Client(
    base_url="https://beta.parallel.ai",
    headers={"x-api-key": "your-api-key"},
)

# 1. Create a task-group shell
group_resp = client.post("/v1beta/tasks/groups", json={}).json()
taskgroup_id = group_resp["taskgroup_id"]

# 2. Initiate runs in that group
questions = [
    "What is the capital of France?",
    "What is the capital of Germany?",
]
run_resp = client.post(
    f"/v1beta/tasks/groups/{taskgroup_id}/runs",
    json={
        "inputs": [
            TaskRunCreateParams(input=q, processor="lite")
            for q in questions
        ]
    },
).json()

print("Initial status:", run_resp["status"])

# 3. Stream live events for this run
events_url = f"/v1beta/tasks/groups/{taskgroup_id}/events"

with client.stream("GET", events_url) as stream:
    for chunk in stream.iter_text():
        if chunk.strip():  # ignore keep-alive blanks
            print("Event:", chunk)
```
```` import httpxfrom parallel.types import TaskRunCreateParams client = httpx.Client(    base_url="https://beta.parallel.ai",    headers={"x-api-key": "your-api-key"},) # 1. Create a task-group shellgroup_resp = client.post("/v1beta/tasks/groups", json={}).json()taskgroup_id = group_resp["taskgroup_id"] # 2. Initiate runs in that groupquestions = [    "What is the capital of France?",    "What is the capital of Germany?",]run_resp = client.post(    f"/v1beta/tasks/groups/{taskgroup_id}/runs",    json={        "inputs": [            TaskRunCreateParams(input=q, processor="lite")            for q in questions        ]    },).json() print("Initial status:", run_resp["status"]) # 3. Stream live events for this runevents_url = f"/v1beta/tasks/groups/{taskgroup_id}/events" with client.stream("GET", events_url) as stream:    for chunk in stream.iter_text():        if chunk.strip():  # ignore keep-alive blanks            print("Event:", chunk) ````

##****Built for Production Scale****
------------------------------------

Whether you're enriching thousands of CRM records, conducting bulk due diligence, or processing large-scale competitive intelligence workflows - the Task Group API makes running Parallel Tasks in batch seamless.

****Unified monitoring**** — Track queued, running, completed, and failed counts through a single endpoint instead of polling hundreds of individual Tasks.

****Real-time results streaming**** — Open one connection and receive each Task's structured output the moment it completes, eliminating the need to orchestrate multiple polling loops.

****Dynamic expansion**** — Add new Tasks to active groups without restarting batches, supporting workflows that discover additional research targets mid-execution.

##****Start Building at Scale****
---------------------------------

The Task Group API is available in public beta today. Get started in our [Developer Platform](https://platform.parallel.ai/)[Developer Platform]($https://platform.parallel.ai/) or dive directly into the [documentation](https://docs.parallel.ai/resources/group-api)[documentation]($https://docs.parallel.ai/resources/group-api).

![Image 2: Parallel avatar](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F9a2c0f2e9634a95512da83f8354aef9d5bf400aa-128x128.png&w=64&q=75)

By Parallel

July 2, 2025

### ##Related Posts 9

[![Image 3: Parallel Search MCP Server in Devin](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2Fdfc00df5061085ec771f28d263b231d4c53747c3-1600x1044.png&w=3840&q=75) ![Image 4: Parallel avatar](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F9a2c0f2e9634a95512da83f8354aef9d5bf400aa-128x128.png&w=64&q=75) ### -[Parallel Search MCP Server in Devin](https://parallel.ai/blog/parallel-search-mcp-in-devin) Tags:Product Release Reading time:2 min](http://parallel.ai/blog/parallel-search-mcp-in-devin)

[![Image 5: Introducing Tool Calling via MCP Servers](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2Fe220ba8a89dfaeb943f943fc92636629a0b9ba14-1600x1600.png&w=3840&q=75) ![Image 6: Parallel avatar](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F9a2c0f2e9634a95512da83f8354aef9d5bf400aa-128x128.png&w=64&q=75) ### -[Introducing Tool Calling via MCP Servers](https://parallel.ai/blog/mcp-tool-calling) Tags:Product Release Reading time:2 min](http://parallel.ai/blog/mcp-tool-calling)

[![Image 7: Introducing the Parallel Search MCP Server ](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F32cf3f1026d452dbaed58e8df4d7b487166d423a-1972x1972.png&w=3840&q=75) ![Image 8: Parallel avatar](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F9a2c0f2e9634a95512da83f8354aef9d5bf400aa-128x128.png&w=64&q=75) ### -[Introducing the Parallel Search MCP Server ](https://parallel.ai/blog/search-mcp-server) Tags:Product Release Reading time:2 min](http://parallel.ai/blog/search-mcp-server)

[![Image 9: Starting today, Source Policy is available for both the Parallel Task API and Search API - giving you granular control over which sources your AI agents access and how results are prioritized.](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F9eec7c7314218135df8fd7a83b1c6d3b953eece9-1528x1016.png&w=3840&q=75) ![Image 10: Parallel avatar](http://parallel.ai/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5hzduz3y%2Fproduction%2F9a2c0f2e9634a95512da83f8354aef9d5bf400aa-128x128.png&w=64&q=75) ### -[Introducing Source Policy](https://parallel.ai/blog/source-policy) Tags:Product Release Reading time:1 min](http://parallel.ai/blog/source-policy)

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
