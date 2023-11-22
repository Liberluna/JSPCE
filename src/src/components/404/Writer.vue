<script setup>
import { Prism } from "prismjs";
import "prismjs/components/prism-javascript";
import { onMounted } from "vue";
import { isIn } from "../../utils/isIn";

onMounted(() => {
    if (isIn("client")) {
        const prismcss = document.createElement("link");
        prismcss.setAttribute("rel", "stylesheet");
        prismcss.setAttribute("type", "text/css");
        prismcss.setAttribute(
            "href",
            "/styles/prism.css"
        )
        document.head.appendChild(prismcss);
    }  
    if (Prism) {
        Prism.highlightAll();
    }
});

const props = defineProps({
    path: String
});

const code = `
fetch("${props.path}").then(response => {
    const path = new URL(response.url).pathname;
    const status = response.status;
    console.log(\`"\${path}" : \${status}\`);
})
`;

const result = `"${props.path}" : 404`

</script>

<template>
    <div>
        <pre id="prism">
            <code class="language-javascript">{{ code.trim() }}</code>
        </pre>
        <pre id="prism">
            <code class="language-yaml">{{ result.trim() }}</code>
        </pre>
    </div>
</template>

<style scoped>
    #prism {
        margin: 0;
        margin-top: 15px;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80vw;
        height: 100%;
        background: #1f1f1f3b;
        border-radius: 10px;
    }

    #prism code {
        width: 90%;
    }

    body.dark #prism {
            background: rgba(239, 239, 239, 0.068);
    }
</style>