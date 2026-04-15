<template>
  <div class="plan-card" :class="{ featured: isFeatured }">
    <div v-if="badge" class="plan-badge" :class="{ 'featured-badge': isFeatured }" >
      {{ badge }}
    </div>

    <div class="plan-header">
      <h2>{{ title }}</h2>
      <p class="plan-subtitle">{{ subtitle }}</p>
    </div>

    <div v-if="price !== undefined && price !== null && price !== ''" class="plan-price">
      <span class="currency">$</span>
      <span class="amount">{{ price }}</span>
      <span class="period">/ {{ period }}</span>
    </div>

    <div v-if="coach" class="coaches-info">
      <p v-for="(coachInfo, index) in coach" :key="index">
        <strong>{{ coachInfo.role }}:</strong> {{ coachInfo.name }}
      </p>
    </div>

    <ul v-if="features && features.length" class="plan-features">
      <li v-for="(feature, index) in features" :key="index">
        <i class="pi pi-check"></i> {{ feature }}
      </li>
    </ul>

    <div v-if="subSections && subSections.length" class="plan-subitems">
      <div
        v-for="(section, index) in subSections"
        :key="index"
        class="subsection"
      >
        <h4>✓ {{ section.title }}</h4>
        <ul class="plan-subfeatures">
          <li v-for="(item, idx) in section.items" :key="idx">{{ item }}</li>
        </ul>
      </div>
    </div>

    <div v-if="schedules && schedules.length" class="schedules-info">
      <p>
        <strong>{{ schedulesTitle || "Horarios" }}:</strong>
      </p>
      <p
        v-for="(schedule, index) in schedules"
        :key="index"
        class="schedule-item"
      >
        {{ schedule }}
      </p>
    </div>

    <div v-if="compatibility" class="compatibility-info">
      <p>
        <small>{{ compatibility }}</small>
      </p>
    </div>

    <div class="plan-footer">
      <Button
        :label="buttonLabel || 'Inscribirme'"
        :severity="buttonSeverity || 'secondary'"
        @click="handleClick"
        class="plan-cta"
      />
    </div>
  </div>
</template>

<script setup>
import Button from "primevue/button";

defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: "",
  },
  badge: {
    type: String,
    default: "",
  },
  price: {
    type: [String, Number],
    default: null,
  },
  period: {
    type: String,
    default: "mes",
  },
  features: {
    type: Array,
    default: () => [],
  },
  subSections: {
    type: Array,
    default: () => [],
  },
  coach: {
    type: Array,
    default: () => [],
  },
  schedules: {
    type: Array,
    default: () => [],
  },
  schedulesTitle: {
    type: String,
    default: "",
  },
  compatibility: {
    type: String,
    default: "",
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  buttonLabel: {
    type: String,
    default: "Inscribirme",
  },
  buttonSeverity: {
    type: String,
    default: "secondary",
  },
  planName: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["select-plan"]);

const handleClick = () => {
  emit("select-plan");
};
</script>

<style scoped>
.plan-card {
  background: var(--surface-card);
  border: 2px solid var(--surface-border);
  border-radius: 12px;
  padding: 2rem;
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  min-height: 420px;
}

.plan-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(34, 197, 94, 0.12);
  border-color: #22c55e;
}

/* .plan-card.featured {
  border-color: #22C55E;
  box-shadow: 0 16px 40px rgba(34, 197, 94, 0.16);
  transform: scale(1.05);
} */

.plan-card.featured:hover {
  box-shadow: 0 16px 40px rgba(34, 197, 94, 0.16);
  transform: scale(1.05) translateY(-4px);
}

.plan-badge {
  position: absolute;
  top: -12px;
  left: 20px;
  background: var(--surface-ground);
  color: var(--text-color);
  padding: 4px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  border: 2px solid var(--surface-border);
}

.plan-badge.featured-badge {
  background: #2ee56f;
  color: #000;
  border-color: #2ee56f;
}

.plan-header {
  margin-bottom: 1.5rem;
  text-align: left;
}

.plan-header h2 {
  margin: 0;
  font-size: 24px;
  font-weight: 700;
}

.plan-subtitle {
  margin: 0.5rem 0 0;
  color: var(--text-color-secondary);
  font-size: 14px;
}

.plan-price {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
}

.plan-price .currency {
  font-size: 20px;
}

.plan-price .amount {
  color: #22c55e;
}

.plan-price .period {
  font-size: 14px;
  color: var(--text-color-secondary);
  margin-left: 0.5rem;
}

.coaches-info {
  background: rgba(46, 229, 111, 0.05);
  border-left: 3px solid #2ee56f;
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1.5rem;
  font-size: 13px;
  line-height: 1.6;
}

.coaches-info p {
  margin: 0.5rem 0;
}

.coaches-info strong {
  color: #2ee56f;
}

.plan-features {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  flex: 1;
}

.plan-features li {
  padding: 0.75rem 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-bottom: 1px solid var(--surface-border);
  font-size: 14px;
}

.plan-features li:last-child {
  border-bottom: none;
}

.plan-features i {
  font-size: 14px;
  color: #2ee56f;
}

.plan-subitems {
  margin-bottom: 1.5rem;
}

.subsection {
  margin-bottom: 1.5rem;
}

.subsection h4 {
  margin: 0 0 0.75rem;
  color: #2ee56f;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
}

.plan-subfeatures {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 13px;
}

.plan-subfeatures li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: var(--text-color);
}

.plan-subfeatures li:before {
  content: "•";
  position: absolute;
  left: 0;
  color: #2ee56f;
  font-weight: bold;
}

.schedules-info {
  background: rgba(46, 229, 111, 0.05);
  border-left: 3px solid #2ee56f;
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1.5rem;
  font-size: 13px;
}

.schedules-info p {
  margin: 0.5rem 0;
  line-height: 1.6;
}

.schedule-item {
  margin-left: 0;
}

.compatibility-info {
  text-align: center;
  padding: 0.75rem;
  background: var(--surface-ground);
  border-radius: 6px;
  margin-bottom: 1.5rem;
  font-size: 12px;
  color: var(--text-color-secondary);
}

.plan-cta {
  width: 100%;
}

.plan-cta {
  background: #22c55e !important;
  color: #000 !important;
  border: none !important;
  padding: 12px 16px !important;
  font-weight: 700 !important;
  border-radius: 8px !important;
  box-shadow: 0 12px 32px rgba(34, 197, 94, 0.18) !important;
  transition: transform 0.2s ease, box-shadow 0.2s ease !important;
}

.plan-cta:hover {
  transform: translateY(-3px) !important;
  box-shadow: 0 18px 40px rgba(34, 197, 94, 0.22) !important;
}

.plan-footer {
  margin-top: auto;
  width: 100%;
}

@media (max-width: 1024px) {
  .plan-card {
    padding: 1.5rem;
  }

  .plan-card.featured {
    transform: scale(1.02);
  }

  .plan-card.featured:hover {
    transform: scale(1.02) translateY(-4px);
  }
}

@media (max-width: 768px) {
  .plan-card {
    padding: 1.5rem 1rem;
  }

  .plan-card.featured {
    transform: scale(1);
  }

  .plan-card.featured:hover {
    transform: translateY(-4px);
  }

  .plan-header h2 {
    font-size: 20px;
  }

  .plan-price {
    font-size: 28px;
  }

  .plan-features li {
    padding: 0.5rem 0;
    font-size: 13px;
  }

  .coaches-info,
  .schedules-info {
    padding: 0.75rem;
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .plan-card {
    padding: 1.25rem 0.75rem;
  }

  .plan-badge {
    font-size: 11px;
    padding: 3px 12px;
    left: 12px;
  }

  .plan-header {
    margin-bottom: 1rem;
  }

  .plan-header h2 {
    font-size: 18px;
  }

  .plan-subtitle {
    font-size: 12px;
  }

  .plan-price {
    font-size: 24px;
    margin-bottom: 1rem;
  }

  .plan-price .currency {
    font-size: 16px;
  }

  .plan-price .period {
    font-size: 12px;
  }

  .plan-features {
    margin: 0 0 1rem;
  }

  .plan-features li {
    padding: 0.5rem 0;
    font-size: 12px;
  }

  .coaches-info,
  .schedules-info {
    padding: 0.75rem;
    font-size: 11px;
    margin-bottom: 1rem;
  }

  .plan-cta {
    padding: 0.75rem !important;
    font-size: 13px !important;
  }
  .plans-header__content h1 {
  text-transform: uppercase;
  letter-spacing: 1px;
}

.plans-header__content p {
  max-width: 600px;
  margin: 0 auto 2rem;
}
}
</style>
