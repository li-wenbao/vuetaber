<template>
	<div>
		<el-tabs tab-position="left" style="height:calc(100vh - 160px);
		padding: 20px;
		background: #FFFFFF;">
			<el-tab-pane :key="item.name" v-for="(item, index) in tabs" 
			:label="item.name">
                <div>
					<div style="border-bottom: 1px solid #0000FF;"
					 :key="items.name" v-for="(items, index) in item.data" >
						<div>{{items.name}}</div>
					</div>
				</div>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	export default {
		name: "dashboard",
		data() {
			return {
				tabs: [{
						name: "用户管理",
						data: [{
								name: "1",
								type: "爱黑发",
								grid: "按时发货"
							},
							{
								name: "fahsfhav",
								type: "爱黑发",
								grid: "按时发货"
							},
							{
								name: "fahsfhav",
								type: "爱黑发",
								grid: "按时发货"
							}
						]
					},
					{
						name: "用户管理2",
						data: [{
								name: "2",
								type: "爱黑发",
								grid: "按时发货"
							},
							{
								name: "fahsfhav",
								type: "爱黑发",
								grid: "按时发货"
							},
							{
								name: "fahsfhav",
								type: "爱黑发",
								grid: "按时发货"
							}
						]
					},
					{
						name: "用户管理3",
						data: [{
								name: "3",
								type: "爱黑发",
								grid: "按时发货"
							},
							{
								name: "fahsfhav",
								type: "爱黑发",
								grid: "按时发货"
							},
							{
								name: "fahsfhav",
								type: "爱黑发",
								grid: "按时发货"
							}
						]
					},
					{
						name: "用户管理4",
						data: [{
								name: "4",
								type: "爱黑发",
								grid: "按时发货"
							},
							{
								name: "fahsfhav",
								type: "爱黑发",
								grid: "按时发货"
							},
							{
								name: "fahsfhav",
								type: "爱黑发",
								grid: "按时发货"
							}
						]
					}
				]
			};
		},
		components: {

		},
		computed: {

		},
		created() {

		},
		activated() {

		},
		deactivated() {

		},
		methods: {

		},
		mounted() {

		}
	};
</script>


<style scoped>

</style>
