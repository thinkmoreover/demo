<template>
    <div class="login">
        <div class="relative">
            <div class="left">
                <el-row>
                    <el-col :span="24">
                        <div class="homepageLogo">
                            <ul>
                                <li>
                                    <!-- <el-image style="width: 50px; height: 50px;" :src="url" fit="fit"  /> -->

                                </li>
                            </ul>
                        </div> 

                    </el-col>
                </el-row>
            </div>
            <div class="right">
                <el-row>
                    <el-col :span="24">
                        <h2>欢迎来到后台管理页面</h2>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <h2>登录</h2>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <el-form :model="form" label-width="120px" label-position="top" size="large" class="form"
                            :rules="rules" ref="ruleFormRef">
                            <el-form-item label="用户名" prop="userName">
                                <el-input v-model="form.userName" />
                            </el-form-item>
                            <el-form-item label="密码" prop="passWord">
                                <el-input v-model.number="form.passWord" type="password" show-password
                                    @keyup.enter="onSubmit(ruleFormRef)" />
                            </el-form-item>
                            <el-form-item>
                                <el-button class="submitBtn" type="primary" @click="onSubmit(ruleFormRef)">登录
                                </el-button>
                            </el-form-item>
                        </el-form>
                    </el-col>              
                </el-row>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { FormInstance, FormRules } from 'element-plus'
const form = reactive({
    userName: '',
    passWord: ''
})
const ruleFormRef = ref()
const rules = ref()
const onSubmit = (ruleFormRef:any) => {}
</script>