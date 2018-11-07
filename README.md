# http-server-bench

Playground to measure http servers performance diferences between different frameworks and languages.

## Rules

- All servers must run on port `1337`.
- All servers respond with `hello, world!`.
- Use [wrk](https://github.com/wg/wrk) benchmark tool (you can get it via homebrew).
- Use 8 threads and 100 connections for 30 seconds.
- No cheating.

## Results

#### Rust Actix Web

```
Running 30s test @ http://localhost:1337
  8 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.02ms   63.38us   6.37ms   85.66%
    Req/Sec    11.79k   473.12    14.27k    84.55%
  2825594 requests in 30.10s, 350.31MB read
Requests/sec:  93873.90
Transfer/sec:     11.64MB
```

#### Rust Hyper

```
Running 30s test @ http://localhost:1337
  8 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     0.95ms   57.71us   5.40ms   83.04%
    Req/Sec    12.57k   289.34    13.31k    80.40%
  3012340 requests in 30.10s, 255.68MB read
Requests/sec: 100077.22
Transfer/sec:      8.49MB
```

#### Node Native (single thread, no cluster)

```
Running 30s test @ http://localhost:1337
  8 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     2.21ms  584.42us  29.70ms   97.27%
    Req/Sec     5.50k   522.52     5.82k    95.34%
  1315639 requests in 30.10s, 141.78MB read
Requests/sec:  43705.17
Transfer/sec:      4.71MB
```

#### Node Native (Cluster)

```
Running 30s test @ http://localhost:1337
  8 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.37ms    1.05ms  48.11ms   98.70%
    Req/Sec     9.25k     0.88k   18.56k    94.05%
  2212477 requests in 30.10s, 238.43MB read
Requests/sec:  73492.86
Transfer/sec:      7.92MB
```