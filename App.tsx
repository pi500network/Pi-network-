import { useState } from "react";
import { Route, Switch } from "wouter";
import FeedbackForm from "./pages/FeedbackForm";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route component={FeedbackForm} />
    </Switch>
  );
}
