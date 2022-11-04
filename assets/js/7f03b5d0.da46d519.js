"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[4836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={title:"Amazon Managed Workflows for Apache Airflow (MWAA)",sidebar_position:2},i="Amazon Managed Workflows for Apache Airflow (MWAA)",l={unversionedId:"job-schedulers-eks/aws-managed-airflow",id:"job-schedulers-eks/aws-managed-airflow",title:"Amazon Managed Workflows for Apache Airflow (MWAA)",description:"Amazon Managed Workflows for Apache Airflow (MWAA) is a managed orchestration service for Apache Airflow that makes it easier to set up and operate end-to-end data pipelines in the cloud at scale. Apache Airflow is an open-source tool used to programmatically author, schedule, and monitor sequences of processes and tasks referred to as \u201cworkflows.\u201d With Managed Workflows, you can use Airflow and Python to create workflows without having to manage the underlying infrastructure for scalability, availability, and security.",source:"@site/docs/job-schedulers-eks/aws-managed-airflow.md",sourceDirName:"job-schedulers-eks",slug:"/job-schedulers-eks/aws-managed-airflow",permalink:"/data-on-eks/docs/job-schedulers-eks/aws-managed-airflow",draft:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/job-schedulers-eks/aws-managed-airflow.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Amazon Managed Workflows for Apache Airflow (MWAA)",sidebar_position:2},sidebar:"docs",previous:{title:"Job schedulers on EKS",permalink:"/data-on-eks/docs/job-schedulers-eks/"},next:{title:"Airflow on EKS",permalink:"/data-on-eks/docs/job-schedulers-eks/self-managed-airflow"}},s={},u=[{value:"Considerations",id:"considerations",level:3},{value:"Prerequisites:",id:"prerequisites",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Validate",id:"validate",level:2},{value:"Run <code>update-kubeconfig</code> command",id:"run-update-kubeconfig-command",level:3},{value:"List the nodes",id:"list-the-nodes",level:3},{value:"List the namespaces in EKS cluster",id:"list-the-namespaces-in-eks-cluster",level:3},{value:"Trigger jobs from MWAA",id:"trigger-jobs-from-mwaa",level:2},{value:"Log into Apache Airflow UI",id:"log-into-apache-airflow-ui",level:3},{value:"Trigger the DAG workflow to execute job in EMR on EKS",id:"trigger-the-dag-workflow-to-execute-job-in-emr-on-eks",level:3},{value:"Trigger the DAG workflow to execute job in EKS",id:"trigger-the-dag-workflow-to-execute-job-in-eks",level:3},{value:"Destroy",id:"destroy",level:2}],c={toc:u};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"amazon-managed-workflows-for-apache-airflow-mwaa"},"Amazon Managed Workflows for Apache Airflow (MWAA)"),(0,r.kt)("p",null,"Amazon Managed Workflows for Apache Airflow (MWAA) is a managed orchestration service for Apache Airflow that makes it easier to set up and operate end-to-end data pipelines in the cloud at scale. Apache Airflow is an open-source tool used to programmatically author, schedule, and monitor sequences of processes and tasks referred to as \u201cworkflows.\u201d With Managed Workflows, you can use Airflow and Python to create workflows without having to manage the underlying infrastructure for scalability, availability, and security."),(0,r.kt)("p",null,"The example demonstrates how to use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/mwaa/latest/userguide/what-is-mwaa.html"},"Amazon Managed Workflows for Apache Airflow (MWAA)")," to assign jobs to Amazon EKS in two ways."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Directly create a job and deploy to EKS."),(0,r.kt)("li",{parentName:"ol"},"Register EKS as a virtual cluster in EMR and assign a spark job to EMR on EKS.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/awslabs/data-on-eks/tree/main/schedulers/managed-airflow-mwaa"},"Code repo")," for this example."),(0,r.kt)("h3",{id:"considerations"},"Considerations"),(0,r.kt)("p",null,"Ideally we recommend adding the steps to sync requirements/sync dags to the MWAA S3 Bucket as part of a CI/CD pipeline. Generally Dags development have a different lifecycle than the Terraform code to provision infrastructure.\nFor simplicity, we are providing steps for that using Terraform running AWS CLI commands on ",(0,r.kt)("inlineCode",{parentName:"p"},"null_resource"),"."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites:"),(0,r.kt)("p",null,"Ensure that you have the following tools installed locally:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html"},"aws cli")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://Kubernetes.io/docs/tasks/tools/"},"kubectl")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://learn.hashicorp.com/tutorials/terraform/install-cli"},"terraform"))),(0,r.kt)("h2",{id:"deploy"},"Deploy"),(0,r.kt)("p",null,"To provision this example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/awslabs/data-on-eks.git\n\ncd data-on-eks/schedulers/managed-airflow-mwaa\n\nterraform init\n\nterraform apply -var region=<aws_region>\n")),(0,r.kt)("p",null,"Enter ",(0,r.kt)("inlineCode",{parentName:"p"},"yes")," at command prompt to apply"),(0,r.kt)("p",null,"Once done, you will see terraform output like below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"terraform output",src:n(6054).Z,width:"670",height:"173"})),(0,r.kt)("p",null,"The following components are provisioned in your environment:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A sample VPC, 3 Private Subnets and 3 Public Subnets"),(0,r.kt)("li",{parentName:"ul"},"Internet gateway for Public Subnets and NAT Gateway for Private Subnets"),(0,r.kt)("li",{parentName:"ul"},"EKS Cluster Control plane with one managed node group"),(0,r.kt)("li",{parentName:"ul"},"EKS Managed Add-ons: VPC_CNI, CoreDNS, Kube_Proxy, EBS_CSI_Driver"),(0,r.kt)("li",{parentName:"ul"},"K8S metrics server and cluster autoscaler"),(0,r.kt)("li",{parentName:"ul"},"A MWAA environment in version 2.2.2"),(0,r.kt)("li",{parentName:"ul"},"An EMR virtual cluster registered with the newly created EKS"),(0,r.kt)("li",{parentName:"ul"},"A S3 bucket with DAG code")),(0,r.kt)("h2",{id:"validate"},"Validate"),(0,r.kt)("p",null,"The following command will update the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeconfig")," on your local machine and allow you to interact with your EKS Cluster using ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," to validate the deployment."),(0,r.kt)("h3",{id:"run-update-kubeconfig-command"},"Run ",(0,r.kt)("inlineCode",{parentName:"h3"},"update-kubeconfig")," command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"aws eks --region <REGION> update-kubeconfig --name <CLUSTER_NAME>\n")),(0,r.kt)("h3",{id:"list-the-nodes"},"List the nodes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get nodes\n\n# Output should look like below\nNAME                         STATUS   ROLES    AGE     VERSION\nip-10-0-0-42.ec2.internal    Ready    <none>   5h15m   v1.23.9-eks-ba74326\nip-10-0-22-71.ec2.internal   Ready    <none>   5h15m   v1.23.9-eks-ba74326\nip-10-0-44-63.ec2.internal   Ready    <none>   5h15m   v1.23.9-eks-ba74326\n")),(0,r.kt)("h3",{id:"list-the-namespaces-in-eks-cluster"},"List the namespaces in EKS cluster"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get ns\n\n# Output should look like below\ndefault           Active   4h38m\nemr-mwaa          Active   4h34m\nkube-node-lease   Active   4h39m\nkube-public       Active   4h39m\nkube-system       Active   4h39m\nmwaa              Active   4h30m\n")),(0,r.kt)("p",null,"namespace ",(0,r.kt)("inlineCode",{parentName:"p"},"emr-mwaa")," will be used by EMR for running spark jobs.",(0,r.kt)("br",null),"\nnamespace ",(0,r.kt)("inlineCode",{parentName:"p"},"mwaa")," will be used by MWAA directly."),(0,r.kt)("h2",{id:"trigger-jobs-from-mwaa"},"Trigger jobs from MWAA"),(0,r.kt)("h3",{id:"log-into-apache-airflow-ui"},"Log into Apache Airflow UI"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the Environments page on the Amazon MWAA console"),(0,r.kt)("li",{parentName:"ul"},"Choose an environment"),(0,r.kt)("li",{parentName:"ul"},"Under the ",(0,r.kt)("inlineCode",{parentName:"li"},"Details")," section, click the link for the Airflow UI",(0,r.kt)("br",null))),(0,r.kt)("p",null,"Note: You will see red error message once login. That is because the EMR connection has not been setup. The message will be gone after following the steps below to set up the connection and login again."),(0,r.kt)("h3",{id:"trigger-the-dag-workflow-to-execute-job-in-emr-on-eks"},"Trigger the DAG workflow to execute job in EMR on EKS"),(0,r.kt)("p",null,"First, you need to set up the connection to EMR virtual cluster in MWAA"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"add connection",src:n(9969).Z,width:"1893",height:"514"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click Add button, ",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},"Make sure use ",(0,r.kt)("inlineCode",{parentName:"li"},"emr_eks")," as Connection Id ",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Amazon Web Services")," as Connection Type ",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},"Replace the value in ",(0,r.kt)("inlineCode",{parentName:"li"},"Extra")," based on your terraform output ",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"li"},'{"virtual_cluster_id":"<emrcontainers_virtual_cluster_id in terraform output>", "job_role_arn":"<emr_on_eks_role_arn in terraform output>"}'))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add a new connection",src:n(1077).Z,width:"1293",height:"853"})),(0,r.kt)("p",null,"Go back to Airflow UI main page, enable the example DAG ",(0,r.kt)("inlineCode",{parentName:"p"},"emr_eks_pi_job")," and then trigger the job."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"trigger EMR",src:n(319).Z,width:"1875",height:"456"})),(0,r.kt)("p",null,"While it is running, use the following command to verify the spark jobs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get all -n emr-mwaa\n")),(0,r.kt)("p",null,"You should see output similar to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                   READY   STATUS    RESTARTS   AGE\npod/000000030tk2ihdmr8g-psstj          3/3     Running   0          90s\npod/pythonpi-a8051f83b415c911-exec-1   2/2     Running   0          14s\npod/pythonpi-a8051f83b415c911-exec-2   2/2     Running   0          14s\npod/spark-000000030tk2ihdmr8g-driver   2/2     Running   0          56s\n\nNAME                                                            TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)                      AGE\nservice/spark-000000030tk2ihdmr8g-ee64be83b4151dd5-driver-svc   ClusterIP   None         <none>        7078/TCP,7079/TCP,4040/TCP   57s\n\nNAME                            COMPLETIONS   DURATION   AGE\njob.batch/000000030tk2ihdmr8g   0/1           92s        92s\n")),(0,r.kt)("p",null,"You can also check the job status in Amazon EMR console. Under the ",(0,r.kt)("inlineCode",{parentName:"p"},"Virtual clusters")," section, click on Virtual cluster"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"EMR job status",src:n(1757).Z,width:"1579",height:"435"})),(0,r.kt)("h3",{id:"trigger-the-dag-workflow-to-execute-job-in-eks"},"Trigger the DAG workflow to execute job in EKS"),(0,r.kt)("p",null,"In the Airflow UI, enable the example DAG kubernetes_pod_example and then trigger it."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Enable the DAG kubernetes_pod_example",src:n(1406).Z,width:"1885",height:"436"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Trigger the DAG kubernetes_pod_example",src:n(4788).Z,width:"3562",height:"808"})),(0,r.kt)("p",null,"Verify that the pod was executed successfully"),(0,r.kt)("p",null,"After it runs and completes successfully, use the following command to verify the pod:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n mwaa\n")),(0,r.kt)("p",null,"You should see output similar to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                             READY   STATUS      RESTARTS   AGE\nmwaa-pod-test.4bed823d645844bc8e6899fd858f119d   0/1     Completed   0          25s\n")),(0,r.kt)("h2",{id:"destroy"},"Destroy"),(0,r.kt)("p",null,"To teardown and remove the resources created in this example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"terraform destroy -auto-approve\n")),(0,r.kt)("hr",null))}d.isMDXComponent=!0},9969:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/add-connection-f1de5dc5892e13dfef6233da47a522bc.png"},4788:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dag-tree-e328dba9e3c9022641e77d5377369de5.png"},1077:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/emr-eks-connection-55b92b466bb898bf95c8b42166c17393.png"},1757:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/emr-job-status-c2cebfd5fc1ff31b45f7eff5a80f8cc4.png"},1406:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kubernetes-pod-example-dag-e6eb4c2a9dbc6f9a5567b99dfe05c0d6.png"},6054:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},319:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/trigger-emr-0fd7f41474713653bd70c3ecb87c2875.png"}}]);