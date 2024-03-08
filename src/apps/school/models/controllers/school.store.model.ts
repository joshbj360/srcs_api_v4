import { defineStore } from "pinia";
import { reactive, ref, Ref } from "vue";
import { SchoolInterface } from "../interface/school.interface";
import apiClient from "@/api-client";

export const useSchoolStore = defineStore('schoolStore', {
    state: () => {
        const schools: SchoolInterface[] = reactive([]);
        const isSchoolSelected: Ref<boolean> = ref(false);
        const school: SchoolInterface = {} as SchoolInterface; // Assuming you want to create an empty object of type SchoolInterface
        const activeSchool: SchoolInterface = {} as SchoolInterface;

        return {
            schools,
            school,
            activeSchool,
            isSchoolSelected
        }
    },
    getters: {
        getSchoolIDs: (state) => {
            return state.schools.map(s => s.schoolID)
        },
        getSchoolFromID: (state) => {
            return (schoolID: string) => state.schools.find(s => s.schoolID === schoolID)
        }
    },
    actions: {
        async fetchSchools(): Promise<SchoolInterface[]> {
             return this.schools = await apiClient.schools.fetchSchools()
        },
        async updateSchool(school: SchoolInterface): Promise<SchoolInterface> {
             return this.school = await apiClient.schools.updateSchool(school)
        },
        async addSchool(): Promise<SchoolInterface> {
             return this.school = await apiClient.schools.addSchool()
        },
        async setActiveSchool(schoolName: string): Promise<SchoolInterface> {
            // TODO validate SchoolName
            const _sch = this.schools.find(s => s.name === schoolName)
            if (_sch){
                this.isSchoolSelected = true
                return this.activeSchool = _sch
            }
            return this.activeSchool
        },
    },
})