<template>
<div class="errorBox">
    <h2>error</h2>

    <br>
    <div class="errorDetails">
    <div class="errorName">
        <h3>Location:  {{item['title']}}</h3>
        <h3>Time:  {{item['date']}} {{item['time']}}</h3>
        <h3>Error Message:  {{item['message']}}</h3>
    </div>
    <div class="errorLog">
        <h3>{{errorDetails}}</h3>
    </div>
</div>    
</div>

</template>

<script setup>
import { stringifyQuery } from 'vue-router';

    let item={
        'title' : "org.jaxl.sslException:12:443",
        'date' : "23/12/2022",
        'time': "12:32 JST",
        'message' : "runtimeException"
    }

   let errorDetails= `
   Exception in thread "main" java.lang.StackOverflowError
        at java.io.PrintStream.write(PrintStream.java:480)
        at sun.nio.cs.StreamEncoder.writeBytes(StreamEncoder.java:221)
        at sun.nio.cs.StreamEncoder.implFlushBuffer(StreamEncoder.java:291)
        at sun.nio.cs.StreamEncoder.flushBuffer(StreamEncoder.java:104)
        at java.io.OutputStreamWriter.flushBuffer(OutputStreamWriter.java:185)
        at java.io.PrintStream.write(PrintStream.java:527)
        at java.io.PrintStream.print(PrintStream.java:669)
        at java.io.PrintStream.println(PrintStream.java:806)
        at StackOverflowErrorExample.recursivePrint(StackOverflowErrorExample.java:4)
        at StackOverflowErrorExample.recursivePrint(StackOverflowErrorExample.java:9)
        at StackOverflowErrorExample.recursivePrint(StackOverflowErrorExample.java:9)
        at StackOverflowErrorExample.recursivePrint(StackOverflowErrorExample.java:9)

        Exception in thread "main" java.lang.StackOverflowError
        at java.io.PrintStream.write(PrintStream.java:480)
        at sun.nio.cs.StreamEncoder.writeBytes(StreamEncoder.java:221)
        at sun.nio.cs.StreamEncoder.implFlushBuffer(StreamEncoder.java:291)
        at sun.nio.cs.StreamEncoder.flushBuffer(StreamEncoder.java:104)
        at java.io.OutputStreamWriter.flushBuffer(OutputStreamWriter.java:185)
        at java.io.PrintStream.write(PrintStream.java:527)
        at java.io.PrintStream.print(PrintStream.java:669)
        at java.io.PrintStream.println(PrintStream.java:806)
        at StackOverflowErrorExample.recursivePrint(StackOverflowErrorExample.java:4)
        at StackOverflowErrorExample.recursivePrint(StackOverflowErrorExample.java:9)
        at StackOverflowErrorExample.recursivePrint(StackOverflowErrorExample.java:9)
        at StackOverflowErrorExample.recursivePrint(StackOverflowErrorExample.java:9)

        Exception in thread "main" java.lang.StackOverflowError
        at java.io.PrintStream.write(PrintStream.java:480)
        at sun.nio.cs.StreamEncoder.writeBytes(StreamEncoder.java:221)
        at sun.nio.cs.StreamEncoder.implFlushBuffer(StreamEncoder.java:291)
        at sun.nio.cs.StreamEncoder.flushBuffer(StreamEncoder.java:104)
        at java.io.OutputStreamWriter.flushBuffer(OutputStreamWriter.java:185)
        at java.io.PrintStream.write(PrintStream.java:527)
        at java.io.PrintStream.print(PrintStream.java:669)
        at java.io.PrintStream.println(PrintStream.java:806)
        at StackOverflowErrorExample.recursivePrint(StackOverflowErrorExample.java:4)
        at StackOverflowErrorExample.recursivePrint(StackOverflowErrorExample.java:9)
        at StackOverflowErrorExample.recursivePrint(StackOverflowErrorExample.java:9)
        at StackOverflowErrorExample.recursivePrint(StackOverflowErrorExample.java:9)

        Exception in thread "main" java.lang.StackOverflowError
        at java.io.PrintStream.write(PrintStream.java:480)
        at sun.nio.cs.StreamEncoder.writeBytes(StreamEncoder.java:221)
        at sun.nio.cs.StreamEncoder.implFlushBuffer(StreamEncoder.java:291)
        at sun.nio.cs.StreamEncoder.flushBuffer(StreamEncoder.java:104)
        at java.io.OutputStreamWriter.flushBuffer(OutputStreamWriter.java:185)
        at java.io.PrintStream.write(PrintStream.java:527)
        at java.io.PrintStream.print(PrintStream.java:669)
        at java.io.PrintStream.println(PrintStream.java:806)
        at StackOverflowErrorExample.recursivePrint(StackOverflowErrorExample.java:4)
        at StackOverflowErrorExample.recursivePrint(StackOverflowErrorExample.java:9)
        at StackOverflowErrorExample.recursivePrint(StackOverflowErrorExample.java:9)
        at StackOverflowErrorExample.recursivePrint(StackOverflowErrorExample.java:9)

        Exception in thread "main" java.lang.StackOverflowError
        at java.io.PrintStream.write(PrintStream.java:480)
        at sun.nio.cs.StreamEncoder.writeBytes(StreamEncoder.java:221)
        at sun.nio.cs.StreamEncoder.implFlushBuffer(StreamEncoder.java:291)
        at sun.nio.cs.StreamEncoder.flushBuffer(StreamEncoder.java:104)
        at java.io.OutputStreamWriter.flushBuffer(OutputStreamWriter.java:185)
        at java.io.PrintStream.write(PrintStream.java:527)
        at java.io.PrintStream.print(PrintStream.java:669)
        at java.io.PrintStream.println(PrintStream.java:806)
        at StackOverflowErrorExample.recursivePrint(StackOverflowErrorExample.java:4)
        at StackOverflowErrorExample.recursivePrint(StackOverflowErrorExample.java:9)
        at StackOverflowErrorExample.recursivePrint(StackOverflowErrorExample.java:9)
        at StackOverflowErrorExample.recursivePrint(StackOverflowErrorExample.java:9)
   
   `
</script>

<style scoped>
    .errorBox{
        font-size: small;
        font-family: sans-serif;
        box-sizing: border-box;
        background-color: lightgrey;
        height: 600px;
        width: auto;
        border-radius: 5px;
        padding: 30px;
    }


    
    .errorLog {
   overflow-y: scroll;
   box-sizing: border-box;
   background-color: black;

    }

    .errorLog h3{
        overflow-y: scroll;
        height: 300px;
        color: white;
    }

    
</style>