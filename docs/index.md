<script setup>
import { useRouter } from 'vitepress'

const router = useRouter()

if (navigator.language.startsWith('zh')) {
  router.go('/zh-CN/')
} else {
  router.go('/en/')
}
</script>