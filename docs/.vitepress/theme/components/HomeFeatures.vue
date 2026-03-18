<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()

const features = computed(() => {
  if (lang.value === 'zh-CN') {
    return [
      {
        icon: '⚡',
        title: 'NPU 加速',
        description: '原生昇腾 NPU 加速，释放硬件计算能力',
      },
      {
        icon: '🔁',
        title: 'NumPy 兼容',
        description: '与 NumPy API 高度兼容，轻松迁移',
      },
      {
        icon: '🔗',
        title: 'CANN 生态',
        description: '无缝集成 Ascend CANN AI 生态系统',
      },
      {
        icon: '📈',
        title: '高性能',
        description: '在大规模矩阵计算中显著提升性能',
      },
    ]
  }
  return [
    {
      icon: '⚡',
      title: 'NPU Acceleration',
      description: 'Native Ascend NPU acceleration to unleash hardware computing power',
    },
    {
      icon: '🔁',
      title: 'NumPy Compatible',
      description: 'Highly compatible with NumPy API for easy migration',
    },
    {
      icon: '🔗',
      title: 'CANN Ecosystem',
      description: 'Seamless integration with Ascend CANN AI ecosystem',
    },
    {
      icon: '📈',
      title: 'High Performance',
      description: 'Significantly improved performance in large-scale matrix computations',
    },
  ]
})
</script>

<template>
  <div class="home-features">
    <div class="features-grid">
      <div v-for="feature in features" :key="feature.title" class="feature-card">
        <div class="feature-icon">{{ feature.icon }}</div>
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-features {
  padding: 2rem 0;
  max-width: 1200px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  padding: 0 1.5rem;
}

.feature-card {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.feature-card h3 {
  margin: 0.5rem 0;
  color: #333;
  font-size: 1.2rem;
}

.feature-card p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
}

/* Dark mode */
html.dark .feature-card {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
}

html.dark .feature-card h3 {
  color: #e2e8f0;
}

html.dark .feature-card p {
  color: #94a3b8;
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
