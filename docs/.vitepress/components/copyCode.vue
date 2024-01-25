<script>
export default {
  methods: {
    copyCode() {
      var codeSnippet = document.getElementById('code-snippet');
      var textarea = document.createElement('textarea');
      textarea.value = '#850129';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      alert('Hex code copied to clipboard!');
    }
  }
}
</script>
