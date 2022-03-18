<!--
 * @Author: Y
 * @Date: 2022-01-13 14:14:44
 * @Description: 
-->
<template>
  <a-form
    :layout="formLayout"
    :model="form"
    ref="formRef"
    :rules="rules"
    @change="onValuesChange"
  >
    <a-row :gutter="12">
      <a-col :md="24" :lg="24" :xl="24" :xxl="14">
        <a-form-item label="题名" name="title" class="formItem">
          <!-- :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol" -->
          <!-- :rules="noISBN ? [{ required: true, message: '请输入题名' }] : []" -->
          <a-input
            placeholder="请输入题名"
            :disabled="disabled"
            v-model:value="form.title"
          />
          <!-- :ref="(inputRef) => setCurrFoucs(inputRef)}" -->
        </a-form-item>
      </a-col>
      <a-col :md="24" :lg="12" :xl="12" :xxl="{ span: 10 }">
        <a-form-item label="版次印次" class="versionAndEdition">
          <a-form-item name="version" class="formItem">
            <a-input
              placeholder="版次"
              :disabled="disabled"
              v-model:value="form.version"
            />
          </a-form-item>
          <a-form-item name="edition" class="formItem">
            <a-input
              :style="{ marginLeft: '6px' }"
              placeholder="印次"
              :disabled="disabled"
              v-model:value="form.edition"
            />
          </a-form-item>
        </a-form-item>
      </a-col>
      <a-col :lg="12" :xl="16" :xxl="{ span: 8 }">
        <a-row class="rowItem">
          <!-- 	:normalize="normalizePrices" -->
          <a-form-item label="定价" name="retailPrice" class="priceFormItem">
            <a-input
              :disabled="disabled || priceDisable"
              :style="{ width: '100%' }"
              v-model:value="form.retailPrice"
              @blur="priceFormat"
            />
            <!-- v-decorator="[
                'retailPrice',
                {  },
              ]" -->
            <!-- 	:onBlur="priceFormat"
							:onPressEnter="priceFormat" -->
          </a-form-item>
          <a-form-item label="" name="priceType" class="formItemBtn">
            <a-select
              :disabled="disabled"
              :showArrow="false"
              :style="{ width: '100%' }"
            >
            </a-select>
          </a-form-item>
          <!-- 	{{ currencyOptions }} -->
        </a-row>
      </a-col>
      <a-col :lg="12" :xl="12" :xxl="{ span: 8 }">
        <a-form-item label="出版时间" class="publishingTime">
          <a-form-item
            name="publishingYear"
            :rules="[
              {
                required: false,
                message: '请将日期填写完整',
              },
              {
                pattern: new RegExp(/^[0-9]{4}$/),
                message: '年份为4位数字',
              },
            ]"
            class="formItem"
          >
            <a-input :disabled="disabled" placeholder="年" />
            <!-- ref={(r) => setPubTimeYear(r)}
                onChange={(e) => onPubYear(e)}
                onBlur={(e) => onPubYear(e)} -->
          </a-form-item>
          <a-form-item
            name="publishingMonth"
            :rules="[
              {
                pattern: new RegExp(/^0?[1-9]$|^1[0-2]$/),
                message: '月份为1~12数值',
              },
            ]"
            class="formItem"
          >
            <a-input
              :disabled="disabled"
              :style="{ marginLeft: '6px' }"
              placeholder="月"
            />
            <!-- ref={(r) => setPubTimeMonth(r)}
                onChange={(e) => onPubMonth(e)}
                onBlur={printTimeFormat} -->
          </a-form-item>
        </a-form-item>
      </a-col>
      <a-col :lg="12" :xl="12" :xxl="{ span: 8 }">
        <a-form-item label="印刷时间" class="publishingTime">
          <a-form-item
            name="printTimeYear"
            :rules="[
              {
                required: false,
                message: '请将日期填写完整',
              },
              {
                pattern: new RegExp(/^[0-9]{4}$/),
                message: '年份为4位数字',
              },
            ]"
            class="formItem"
          >
            <a-input :disabled="disabled" placeholder="年" />
            <!-- ref={(r) => setPrintTimeYear(r)}
            onChange={(e) => onPrintYear(e)} onBlur={(e) => onPrintYear(e)} -->
          </a-form-item>
          <a-form-item
            name="printTimeMonth"
            :rules="[
              {
                pattern: new RegExp(/^0?[1-9]$|^1[0-2]$/),
                message: '月份为1~12数值',
              },
            ]"
            class="formItem"
          >
            <a-input
              :disabled="disabled"
              :style="{ marginLeft: '6px' }"
              placeholder="月"
            />
            <!-- ref={(r) => setPrintTimeMonth(r)}
                onChange={(e) => onPrintMonth(e)}
                onBlur={printTimeFormat} -->
          </a-form-item>
        </a-form-item>
      </a-col>
      <a-col :lg="12" :xl="8" :xxl="8">
        <a-form-item
          label="册数"
          name="copiesNum"
          :rules="[{ required: !disabled, message: '请输入册数' }]"
          class="formItem"
        >
          <template slot="extra">
            <div :style="{ color: '#ff4d4f' }">
              {{ tips }}
            </div>
          </template>
          <a-input-number
            :disabled="disabled"
            :style="{ width: '100%' }"
            :min="1"
          />
          <!-- disabled={disabled}
              onChange={() => setExtraShow(true)}
              placeholder="册数" -->
        </a-form-item>
      </a-col>
      <a-col :lg="12" :xl="8" :xxl="{ span: 8 }">
        <a-form-item label="是否盲文" name="braille" class="formItem">
          <a-select :disabled="disabled">
            <a-select-option value="YES">是</a-select-option>
            <a-select-option value="NO">否</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :lg="12" :xl="12" :xxl="{ span: 8 }">
        <a-form-item label="种类" name="type" class="formItem">
          <a-select placeholder="种类" :disabled="disabled">
            {instanceTypeOptions}
          </a-select>
        </a-form-item>
      </a-col>
      <a-col lg="{12}" xl="{12}" xxl="{8}">
        <a-form-item
          label="ALEPH价格"
          name="retailPriceRemark"
          class="formItem"
          :labelCol="{ span: 6 }"
        >
          <a-input disabled :style="{ width: '100%' }" />
        </a-form-item>
      </a-col>

      <a-col :lg="12" :xl="8" :xxl="8">
        <a-form-item label="套装号" name="packageNo" class="formItem">
          <a-textarea autoSize disabled :style="{ resize: 'none' }" />
        </a-form-item>
      </a-col>
      <a-col :md="24" :lg="24" :xl="16" :xxl="{ span: 8 }">
        <a-form-item
          name="virtualPackageNo"
          label="虚拟套装号"
          class="formItem"
          :labelCol="{ span: 6 }"
        >
          <a-textarea autoSize disabled :style="{ resize: 'none' }" />
        </a-form-item>
      </a-col>
    </a-row>
    <a-button type="primary" html-type="submit" @click="onSubmit">
      保存
    </a-button>
  </a-form>
</template>

<script lang="ts">
import { addInstance } from "@/service/book/register";
import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  ref,
  toRefs,
  watch,
} from "vue";
import { useStore } from "vuex";
const formLayout = "horizontal";
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 14 },
};

export default defineComponent({
  setup() {
    const store = useStore();
    const formRef = ref();
    const data = reactive({});
    let formData = reactive({
      form: {},
    });

    // computed
    const instanceInfo = computed(() => store.state.bookRegister.instanceInfo);
    const priceDisable = computed(() => {
      if (formData.form) {
        return (
          formData.form.priceType === "NONE" ||
          formData.form.priceType === "NONE_ITEM" ||
          formData.form.priceType === "UNKNOWN"
        );
      }
    });
    const disabled = computed(() => {
      const instanceValue = instanceInfo.value;
      return (
        !instanceValue ||
        (instanceValue &&
          instanceValue.instance &&
          instanceValue.instance.own &&
          !instanceValue.instance.own.toLocaleUpperCase().includes("BOXUP") &&
          !instanceValue.instance.own.toLocaleUpperCase().includes("CHECKIN"))
      );
    });
    const tips = computed(() => {
      const instanceValue = formRef.value;
      return instanceValue && Number(instanceValue.copiesNum) > 2000
        ? "请确认输入册数"
        : "";
    });

    // watch
    watch(instanceInfo, (nextInstance) => {
      if (nextInstance) {
        formData.form = nextInstance.instance;
      }
    });

    const priceFormat = async () => {
      const formValue = formRef.value.getFieldsValue();
      if (formValue && formValue.retailPrice && formValue.retailPrice !== " ") {
        const formatValue = Number(formValue.retailPrice).toFixed(2);
        formData.form.retailPrice = formatValue;
        console.log({ formValue: formRef.value.getFieldsValue() });
      }
    };

    const upDatedInstance = () => {
      const formValues= formData.form as any
			const instance = instanceInfo.value
      const data = {
        receives: [
          {
            instanceLog: {
              id: instance.id,
              isbn: instance.isbn,
              packageNo: formValues.packageNo,
              type: currentTypeId, // 类型图书
              source: formValues.source,
              version: formInstance.version,
              edition: formInstance.edition,
              retailPrice: formValues.retailPrice ? formValues.retailPrice : 0,
              wholesalePrice: formValues.wholesalePrice
                ? formValues.wholesalePrice
                : 0,
              remark: formValues.remark,
              title: formValues.title,
              publisher: instance.publisher,
              firstAuthor: instance.firstAuthor,
              priceType: formValues.priceType || "CNY",
              operateType: operateType["修改版本库"],
              callNumber: formInstance.callNumber,
              sourcePart: formValues.sourcePart,
              publishingYear: formValues.publishingYear,
              publishingMonth: formValues.publishingMonth,
              printTime: formInstance.printTime,
              braille: formValues.braille,
              copiesNum: formValues.copiesNum,
              condition: formValues.condition,
              topic: formValues.topic,
            },
            instance: diffInstance,
            attachments: formValues.attachments,
            otherSourceList: otherSource,
          },
        ],
        source: tabsValue,
      };

      addInstance(data).then((response) => {
        store.commit("bookRegister/SAVE_DATAS", { instanceInfo: response });
      });
    };

    // 事件
    const onValuesChange = (props, value) => {
      console.log({ props, value });
    };
    const onSubmit = (values: any) => {
      formRef.value
        .validate()
        .then((res: object) => {
          upDatedInstance();
          //验证成功时跳转首页
          console.log({ res, formRef: formRef.value.title });
        })
        .catch((res: object) => {
          //验证失败提示错误信息
        });
      console.log({ values });
    };

    onMounted(() => {
      // this.form = this.$form.createForm(this, onValuesChange);
    });

    // 常量
    const rules = {
      retailPrice: [
        {
          require: true,
          max: 11,
          name: "retailPrice",
          message: "整数位不能超过8位",
        },
      ],
    };

    return {
      ...toRefs(formData),
      formRef,
      instanceInfo,
      tips,
      formLayout,
      formItemLayout,
      priceDisable,
      priceFormat,
      onValuesChange,
      onSubmit,
      disabled,
      rules,
    };
  },
});
</script>

<style lang="scss" scoped>
:deep(.ant-form-item-control-input-content) {
  display: flex;
  flex-direction: row;
  .ant-form-item {
    flex: 1;
  }
}
:deep(.ant-form-item) {
  margin-bottom: 8px;
}
</style>
