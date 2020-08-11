<script>
export default {
  functional: true,
  props: {
    title: {
      type: String
    },
    icon: {
      type: String
    }
  },
  render(h, context) {
    let { title, icon } = context.props

    let nodes = []

    if(icon) {
      nodes.push(<i class={icon} />)
    }

    if(title) {
      nodes.push(<span slot="title">{title}</span>)
    }
    return nodes
  }
}
</script>