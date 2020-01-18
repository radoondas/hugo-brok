---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
author: {{ .Site.Params.Name }}
draft: true
---