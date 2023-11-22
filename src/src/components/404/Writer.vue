<script>
import { ref, onMounted } from 'vue';
import { Prism } from "prismjs";
import "prismjs/components/prism-javascript";
import { isIn } from "../../utils/isIn";

export default {
  props: {
    path: String
  },
  setup(props) {
    const code = ref('');
    const result = ref('');

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

      code.value = `
fetch("${props.path}").then(response => {
    const path = new URL(response.url).pathname;
    const status = response.status;
    console.log(\`"\${path}" : \${status}\`);
})
`;
      result.value = `"${props.path}" : 404`
    });

    return {
      code,
      result
    }
  }
}
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