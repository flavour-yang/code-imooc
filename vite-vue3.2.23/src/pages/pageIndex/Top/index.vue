<!--
 * @Author: Y
 * @Date: 2022-01-12 13:51:39
 * @Description: 搜索框
-->
<template>
  <a-row>
    <a-col :span="2"
      ><a-select
        default-value="ISBN"
        :value="topForm.type"
        @change="selectChange"
      >
        <a-select-option v-for="(k, v) of topSelect" :value="v">
          {{ k }}
        </a-select-option>
      </a-select>
    </a-col>
    <a-col :span="6"
      ><a-input
        ref="inputRef"
        placeholder=""
        :value="topForm.text"
        @change="inputChange"
        id="text"
        @focus="onFocus"
    /></a-col>
    <a-space style="margin-left: 10px">
      <a-button type="primary" @click="onSearch">搜索</a-button>
      <a-button type="primary"> 新建套装 </a-button>
      <a-button type="primary"> 修改套装 </a-button>
      <a-button type="primary"> 套装清单 </a-button>
      <a-button type="primary"> 日志 </a-button>
    </a-space>
  </a-row>
</template>

<script lang="ts">
import { query, queryDetail } from "@/service/book/register";
import { computed, defineComponent, reactive, ref } from "vue";
import { useStore } from "vuex";
const topSelect = {
  isbn: "ISBN",
  usbn: "USBN",
  cip: "CIP",
  assetCode: "资产码",
  title: "题名",
  packageNo: "套装",
};
export default defineComponent({
  setup() {
    const inputRef = ref(null);
    const store = useStore();
    const currentType = store.state.bookRegister.currentType;
    const topForm = reactive({ type: "isbn", text: "" });

    const onSearch = () => {
      const data: any = {};
      data[topForm.type] = topForm.text;
      data.type = currentType;
      data.source = "SUBMISSION";
      query(data).then((res) => {
        store.commit("bookRegister/SAVE_DATAS", { versionData: res });
      });
    };
    const selectChange = (value: any) => {
      topForm.type = value;
      const searchValues = {
        type: topForm.type,
        text: topForm.text,
      };
      store.commit("bookRegister/SAVE_DATAS", { searchValues });
    };
    const inputChange = (e: InputEvent) => {
      const { value } = e.target;
      topForm.text = value;
      const searchValues = {
        type: topForm.type,
        text: topForm.text,
      };
      store.commit("bookRegister/SAVE_DATAS", { searchValues });
    };

    const onFocus = () => {
      inputRef.value.select();
    };
    // computed(() => Object.entries(topSelect))
    return {
      topForm,
      topSelect,
      onSearch,
      selectChange,
      inputChange,
      onFocus,
      inputRef,
    };
  },
});
</script>

<style lang="scss"></style>
